"use client";

import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Vortex } from "@/components/ui/vortex";

export default function Component() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const mousePositionRef = useRef({ x: 0, y: 0 });
	const isTouchingRef = useRef(false);
	const [isMobile, setIsMobile] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		if (!ctx) return;

		const updateCanvasSize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			setIsMobile(window.innerWidth < 768);
		};

		updateCanvasSize();

		let particles: {
			x: number;
			y: number;
			baseX: number;
			baseY: number;
			size: number;
			color: string;
			scatteredColor: string;
			life: number;
		}[] = [];

		let textImageData: ImageData | null = null;

		function createTextImage() {
			if (!ctx || !canvas || canvas.width === 0 || canvas.height === 0) return 0;

			ctx.save();

			const fontSize = isMobile ? 120 : 240;
			ctx.font = `bold ${fontSize}px sans-serif`;
			ctx.textBaseline = "middle";
			ctx.textAlign = "left";

			const text = "SOS";
			const textMetrics = ctx.measureText(text);
			const textWidth = textMetrics.width;
			let currentX = canvas.width / 2 - textWidth / 2;

			// Draw first 'S' in red to map it
			ctx.fillStyle = "rgb(255, 0, 0)";
			ctx.fillText("S", currentX, canvas.height / 2);
			currentX += ctx.measureText("S").width;

			// Draw 'O' in green to map it
			ctx.fillStyle = "rgb(0, 255, 0)";
			ctx.fillText("O", currentX, canvas.height / 2);
			currentX += ctx.measureText("O").width;

			// Draw second 'S' in blue to map it
			ctx.fillStyle = "rgb(0, 0, 255)";
			ctx.fillText("S", currentX, canvas.height / 2);

			ctx.restore();

			textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			return 1;
		}

		function createParticle() {
			if (!canvas || !textImageData) return null;

			const data = textImageData.data;

			for (let attempt = 0; attempt < 100; attempt++) {
				const x = Math.floor(Math.random() * canvas.width);
				const y = Math.floor(Math.random() * canvas.height);
				const index = (y * canvas.width + x) * 4;

				if (data[index + 3] > 128) {
					const r = data[index];
					const g = data[index + 1];
					const b = data[index + 2];

					let scatteredColor = "#FF4136"; // Default

					if (r > 200) {
						scatteredColor = "#00aff0";
					} else if (g > 200) {
						scatteredColor = "#eb268f";
					} else if (b > 200) {
						scatteredColor = "#00aff0";
					}

					return {
						x: x,
						y: y,
						baseX: x,
						baseY: y,
						size: Math.random() * 1 + 0.5,
						color: theme === "dark" ? "white" : "black",
						scatteredColor: scatteredColor,
						life: Math.random() * 100 + 50,
					};
				}
			}

			return null;
		}

		function createInitialParticles() {
			if (!canvas) return;
			const baseParticleCount = 7000;
			const particleCount = Math.floor(baseParticleCount * Math.sqrt(((canvas.width ?? 0) * (canvas.height ?? 0)) / (1920 * 1080)));
			for (let i = 0; i < particleCount; i++) {
				const particle = createParticle();
				if (particle) particles.push(particle);
			}
		}

		let animationFrameId = 0;

		function animate() {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// Transparent background
			// No fillRect, so canvas stays transparent

			const { x: mouseX, y: mouseY } = mousePositionRef.current;
			const maxDistance = 240;

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				const dx = mouseX - p.x;
				const dy = mouseY - p.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
					const force = (maxDistance - distance) / maxDistance;
					const angle = Math.atan2(dy, dx);
					const moveX = Math.cos(angle) * force * 60;
					const moveY = Math.sin(angle) * force * 60;
					p.x = p.baseX - moveX;
					p.y = p.baseY - moveY;

					ctx.fillStyle = p.scatteredColor;
				} else {
					p.x += (p.baseX - p.x) * 0.1;
					p.y += (p.baseY - p.y) * 0.1;
					ctx.fillStyle = p.color;
				}

				ctx.fillRect(p.x, p.y, p.size, p.size);

				p.life--;
				if (p.life <= 0) {
					const newParticle = createParticle();
					if (newParticle) {
						particles[i] = newParticle;
					} else {
						particles.splice(i, 1);
						i--;
					}
				}
			}

			const baseParticleCount = 7000;
			const targetParticleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)));
			while (particles.length < targetParticleCount) {
				const newParticle = createParticle();
				if (newParticle) particles.push(newParticle);
			}

			animationFrameId = window.requestAnimationFrame(animate);
		}

		if (createTextImage() === 0) return;
		createInitialParticles();
		animate();

		const handleResize = () => {
			updateCanvasSize();
			if (createTextImage() === 0) return;
			particles = [];
			createInitialParticles();
		};

		const handleMove = (x: number, y: number) => {
			mousePositionRef.current = { x, y };
		};

		const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
		const handleTouchMove = (e: TouchEvent) => {
			if (e.touches.length > 0) {
				e.preventDefault();
				handleMove(e.touches[0].clientX, e.touches[0].clientY);
			}
		};
		const handleTouchStart = () => {
			isTouchingRef.current = true;
		};
		const handleTouchEnd = () => {
			isTouchingRef.current = false;
			mousePositionRef.current = { x: 0, y: 0 };
		};
		const handleMouseLeave = () => {
			if (!("ontouchstart" in window)) {
				mousePositionRef.current = { x: 0, y: 0 };
			}
		};

		window.addEventListener("resize", handleResize);
		canvas.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
		canvas.addEventListener("mouseleave", handleMouseLeave);
		canvas.addEventListener("touchstart", handleTouchStart);
		canvas.addEventListener("touchend", handleTouchEnd);

		return () => {
			window.removeEventListener("resize", handleResize);
			canvas.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("touchmove", handleTouchMove);
			canvas.removeEventListener("mouseleave", handleMouseLeave);
			canvas.removeEventListener("touchstart", handleTouchStart);
			canvas.removeEventListener("touchend", handleTouchEnd);
			window.cancelAnimationFrame(animationFrameId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMobile, theme]);

	return (
		<div>
				<div className="relative w-full h-dvh flex flex-col items-center justify-center bg-purple-900">
				
					<canvas
						ref={canvasRef}
						className="w-full h-full absolute top-0 left-0 bg-transparent touch-none"
						aria-label="Interactive particle effect spelling out SOS"
					/>
				</div>
			
			{/* <div className="flex justify-center items-center mt-4">
				<p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Publications</p>
			</div> */}
			
		</div>
	);
}
