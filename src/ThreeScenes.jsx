    import React, { useEffect, useRef } from 'react';
    import * as THREE from 'three';

    function ThreeScene({ scrollProgress, mousePosition }) {
        const threeContainerRef = useRef(null);
        const sceneRef = useRef(null);
        const meshRef = useRef(null);
        const animationFrameRef = useRef(null);

        // Initialize Three.js scene
        useEffect(() => {
            if (!threeContainerRef.current) return;

            const container = threeContainerRef.current;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0);
            renderer.domElement.style.position = 'absolute';
            renderer.domElement.style.top = '0';
            renderer.domElement.style.left = '0';
            renderer.domElement.style.zIndex = '5';
            container.appendChild(renderer.domElement);

            // Create modern website texture with glass morphism effect
            const createWebsiteTexture = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 2048;
                canvas.height = 1536;
                const context = canvas.getContext('2d');

                // Modern browser chrome with gradient
                const browserGradient = context.createLinearGradient(0, 0, 0, canvas.height * 0.08);
                browserGradient.addColorStop(0, '#2b2d42');
                browserGradient.addColorStop(1, '#1a1a2e');
                context.fillStyle = browserGradient;
                context.fillRect(0, 0, canvas.width, canvas.height * 0.08);

                // Browser buttons (modern style)
                context.fillStyle = '#ff5f56';
                context.beginPath();
                context.arc(canvas.width * 0.05, canvas.height * 0.04, 8, 0, Math.PI * 2);
                context.fill();

                context.fillStyle = '#ffbd2e';
                context.beginPath();
                context.arc(canvas.width * 0.08, canvas.height * 0.04, 8, 0, Math.PI * 2);
                context.fill();

                context.fillStyle = '#27c93f';
                context.beginPath();
                context.arc(canvas.width * 0.11, canvas.height * 0.04, 8, 0, Math.PI * 2);
                context.fill();

                // Modern address bar with glass effect
                context.fillStyle = 'rgba(255, 255, 255, 0.2)';
                context.beginPath();
                context.roundRect(canvas.width * 0.15, canvas.height * 0.03, canvas.width * 0.7, canvas.height * 0.04, [20]);
                context.fill();
                context.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                context.stroke();

                // Website content with glass morphism effect
                context.fillStyle = 'rgba(255, 255, 255, 0.1)';
                context.beginPath();
                context.roundRect(0, canvas.height * 0.08, canvas.width, canvas.height * 0.92, [0, 0, 20, 20]);
                context.fill();
                context.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                context.stroke();

                // Modern navbar with blur effect
                context.fillStyle = 'rgba(43, 45, 66, 0.7)';
                context.beginPath();
                context.roundRect(0, canvas.height * 0.08, canvas.width, canvas.height * 0.06, [0, 0, 20, 20]);
                context.fill();

                // Nav items with modern typography
                context.fillStyle = '#ffffff';
                context.font = '600 60px "Inter", sans-serif';
                const navItems = ['Home', 'Work', 'About', 'Contact'];
                navItems.forEach((item, i) => {
                    context.fillText(item, canvas.width * (0.1 + i * 0.2), canvas.height * 0.12);
                });

                // Hero section with gradient text
                const gradient = context.createLinearGradient(0, canvas.height * 0.25, 0, canvas.height * 0.35);
                gradient.addColorStop(0, '#8a2be2');
                gradient.addColorStop(1, '#4a00e0');
                context.fillStyle = gradient;
                context.font = '800 120px "Inter", sans-serif';
                context.textAlign = 'center';
                context.fillText('Modern Portfolio', canvas.width / 2, canvas.height * 0.3);

                context.fillStyle = 'rgba(255, 255, 255, 0.7)';
                context.font = '400 40px "Inter", sans-serif';
                context.fillText('Interactive 3D Experience', canvas.width / 2, canvas.height * 0.4);

                // Content cards with glass morphism
                for (let i = 0; i < 3; i++) {
                    context.fillStyle = 'rgba(255, 255, 255, 0.1)';
                    context.beginPath();
                    context.roundRect(
                        canvas.width * (0.1 + i * 0.3),
                        canvas.height * 0.5,
                        canvas.width * 0.25,
                        canvas.height * 0.3,
                        [20]
                    );
                    context.fill();
                    context.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                    context.stroke();

                    // Card content
                    context.fillStyle = '#ffffff';
                    context.font = '600 50px "Inter", sans-serif';
                    context.textAlign = 'left';
                    context.fillText(`Project ${i + 1}`, canvas.width * (0.12 + i * 0.3), canvas.height * 0.55);

                    context.fillStyle = 'rgba(255, 255, 255, 0.7)';
                    context.font = '400 30px "Inter", sans-serif';
                    context.fillText('Innovative design', canvas.width * (0.12 + i * 0.3), canvas.height * 0.6);
                    context.fillText('& development', canvas.width * (0.12 + i * 0.3), canvas.height * 0.65);
                }

                const texture = new THREE.CanvasTexture(canvas);
                return texture;
            };

            // Create modern iPhone texture with iOS 17 style
            const createiPhoneScreenTexture = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 1170; // Slightly larger for better quality
                canvas.height = 2532; // iPhone 13 aspect ratio
                const context = canvas.getContext('2d');

                // Modern dark background with gradient
                const bgGradient = context.createLinearGradient(0, 0, 0, canvas.height);
                bgGradient.addColorStop(0, '#0f0c29');
                bgGradient.addColorStop(1, '#302b63');
                context.fillStyle = bgGradient;
                context.fillRect(0, 0, canvas.width, canvas.height);

                // Status bar area with blur effect
                context.fillStyle = 'rgba(15, 12, 41, 0.7)';
                context.fillRect(0, 0, canvas.width, canvas.height * 0.05);

                // Dynamic island (iPhone 14 Pro style)
                context.fillStyle = 'rgba(20, 20, 30, 0.7)';
                context.beginPath();
                context.ellipse(canvas.width / 2, canvas.height * 0.03, 120, 35, 0, 0, Math.PI * 2);
                context.fill();

                // Time and status icons
                context.fillStyle = '#ffffff';
                context.font = '600 50px "Inter", sans-serif';
                context.textAlign = 'center';
                context.fillText('9:41', canvas.width / 2, canvas.height * 0.035);

                // App icons with modern style
                const iconSize = canvas.width * 0.2;
                const iconColors = ['#FF3B30', '#5856D6', '#34C759', '#007AFF', '#FF9500', '#FF2D55'];
                const iconNames = ['Photos', 'Maps', 'Health', 'Safari', 'Settings', 'Music'];

                for (let row = 0; row < 4; row++) {
                    for (let col = 0; col < 3; col++) {
                        const index = row * 3 + col;
                        if (index >= iconColors.length) break;

                        // Icon background with shadow
                        context.shadowColor = 'rgba(0, 0, 0, 0.3)';
                        context.shadowBlur = 15;
                        context.shadowOffsetY = 10;

                        context.fillStyle = iconColors[index];
                        context.beginPath();
                        context.roundRect(
                            canvas.width * (0.1 + col * 0.27),
                            canvas.height * (0.15 + row * 0.2),
                            iconSize,
                            iconSize,
                            [25]
                        );
                        context.fill();

                        // Reset shadow
                        context.shadowColor = 'transparent';

                        // Icon text
                        context.fillStyle = '#ffffff';
                        context.font = '500 30px "Inter", sans-serif';
                        context.textAlign = 'center';
                        context.fillText(
                            iconNames[index] || `App ${index + 1}`,
                            canvas.width * (0.1 + col * 0.27) + iconSize / 2,
                            canvas.height * (0.15 + row * 0.2) + iconSize + 40
                        );
                    }
                }

                // Modern dock with glass effect
                context.fillStyle = 'rgba(50, 50, 80, 0.5)';
                context.beginPath();
                context.roundRect(
                    canvas.width * 0.15,
                    canvas.height * 0.85,
                    canvas.width * 0.7,
                    iconSize + 40,
                    [30]
                );
                context.fill();
                context.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                context.stroke();

                const dockIcons = ['Phone', 'Messages', 'Mail', 'Camera'];
                for (let i = 0; i < 4; i++) {
                    context.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    context.beginPath();
                    context.roundRect(
                        canvas.width * (0.2 + i * 0.15),
                        canvas.height * 0.87,
                        iconSize * 0.8,
                        iconSize * 0.8,
                        [20]
                    );
                    context.fill();

                    context.fillStyle = '#ffffff';
                    context.font = '500 25px "Inter", sans-serif';
                    context.textAlign = 'center';
                    context.fillText(
                        dockIcons[i],
                        canvas.width * (0.2 + i * 0.15) + (iconSize * 0.8) / 2,
                        canvas.height * 0.87 + iconSize * 0.8 + 30
                    );
                }

                // Home indicator
                context.fillStyle = 'rgba(255, 255, 255, 0.5)';
                context.beginPath();
                context.roundRect(
                    canvas.width * 0.4,
                    canvas.height * 0.98,
                    canvas.width * 0.2,
                    5,
                    [5]
                );
                context.fill();

                const texture = new THREE.CanvasTexture(canvas);
                return texture;
            };

            // Create Apple Vision Pro style VR texture
            const createVRTexture = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 2048;
                canvas.height = 2048;
                const context = canvas.getContext('2d');

                // Background - space environment
                context.fillStyle = '#000000';
                context.fillRect(0, 0, canvas.width, canvas.height);

                // Stars
                context.fillStyle = '#ffffff';
                for (let i = 0; i < 200; i++) {
                    const size = Math.random() * 2 + 0.5;
                    const opacity = Math.random() * 0.8 + 0.2;
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.arc(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height,
                        size,
                        0,
                        Math.PI * 2
                    );
                    context.fill();
                }
                context.globalAlpha = 1;

                // Vision Pro style UI
                context.fillStyle = 'rgba(255, 255, 255, 0.1)';
                context.beginPath();
                context.arc(canvas.width * 0.3, canvas.height * 0.5, canvas.width * 0.25, 0, Math.PI * 2);
                context.fill();
                context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                context.stroke();

                context.beginPath();
                context.arc(canvas.width * 0.7, canvas.height * 0.5, canvas.width * 0.25, 0, Math.PI * 2);
                context.fill();
                context.stroke();

                // App icons floating in space
                const appIcons = [
                    { name: 'Photos', color: '#FF3B30' },
                    { name: 'Safari', color: '#007AFF' },
                    { name: 'Music', color: '#FF2D55' },
                    { name: 'TV', color: '#5856D6' }
                ];

                appIcons.forEach((app, i) => {
                    const angle = (i / appIcons.length) * Math.PI * 2;
                    const x = canvas.width * 0.5 + Math.cos(angle) * canvas.width * 0.3;
                    const y = canvas.height * 0.5 + Math.sin(angle) * canvas.height * 0.3;

                    // Glow effect
                    const glow = context.createRadialGradient(x, y, 0, x, y, 100);
                    glow.addColorStop(0, app.color);
                    glow.addColorStop(1, 'rgba(0,0,0,0)');
                    context.fillStyle = glow;
                    context.beginPath();
                    context.arc(x, y, 100, 0, Math.PI * 2);
                    context.fill();

                    // App icon
                    context.fillStyle = app.color;
                    context.beginPath();
                    context.roundRect(x - 75, y - 75, 150, 150, [30]);
                    context.fill();

                    context.fillStyle = '#ffffff';
                    context.font = '600 50px "Inter", sans-serif';
                    context.textAlign = 'center';
                    context.fillText(app.name.charAt(0), x, y + 20);
                });

                // UI text
                context.fillStyle = '#ffffff';
                context.font = '600 80px "Inter", sans-serif';
                context.textAlign = 'center';
                context.fillText('Vision Pro', canvas.width / 2, canvas.height * 0.2);

                context.fillStyle = 'rgba(255, 255, 255, 0.7)';
                context.font = '400 50px "Inter", sans-serif';
                context.fillText('Look around to navigate', canvas.width / 2, canvas.height * 0.85);

                const texture = new THREE.CanvasTexture(canvas);
                return texture;
            };

            // Website - More realistic with depth
            const websiteGeometry = new THREE.BoxGeometry(5, 3, 0.1);
            const websiteMaterial = new THREE.MeshPhongMaterial({
                map: createWebsiteTexture(),
                shininess: 50,
                side: THREE.DoubleSide,
            });

            // Browser chrome frame
            const browserFrameGeometry = new THREE.BoxGeometry(5.1, 3.1, 0.15);
            const browserFrameMaterial = new THREE.MeshPhongMaterial({
                color: '#000',
                shininess: 30,
            });

            // iPhone - More detailed model
            const iPhoneWidth = 2.5;
            const iPhoneHeight = 5;
            const iPhoneDepth = 0.3;
            const iPhoneGeometry = new THREE.BoxGeometry(iPhoneWidth, iPhoneHeight, iPhoneDepth);

            // iPhone notch
            const iPhoneNotchGeometry = new THREE.BoxGeometry(iPhoneWidth * 0.4, iPhoneHeight * 0.04, iPhoneDepth * 1.1);

            // iPhone buttons
            const iPhoneButtonGeometry = new THREE.CylinderGeometry(iPhoneWidth * 0.03, iPhoneWidth * 0.03, iPhoneDepth * 0.8, 32);

            const iPhoneBodyMaterial = new THREE.MeshPhongMaterial({
                color: 0x111111,
                shininess: 150,
                specular: 0x333333,
            });

            const iPhoneScreenMaterial = new THREE.MeshPhongMaterial({
                map: createiPhoneScreenTexture(),
                shininess: 200,
            });

            const iPhoneNotchMaterial = new THREE.MeshPhongMaterial({
                color: 0x000000,
                shininess: 100,
            });

            const iPhoneButtonMaterial = new THREE.MeshPhongMaterial({
                color: 0x333333,
                shininess: 50,
            });

            // Vision Pro Headset - More detailed model
            const vrHeadsetBodyGeometry = new THREE.SphereGeometry(1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5);
            const vrHeadsetLensGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 32);
            const vrHeadsetLensInnerGeometry = new THREE.CylinderGeometry(0.55, 0.55, 0.11, 32);
            const vrHeadsetFrameGeometry = new THREE.TorusGeometry(1.6, 0.1, 16, 100);
            const vrHeadsetBandGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
            const vrHeadsetPaddingGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 100);

            // Vision Pro materials
            const vrHeadsetMaterial = new THREE.MeshPhongMaterial({
                color: 0x333333,
                shininess: 100,
                metalness: 0.8,
            });

            const vrHeadsetLensMaterial = new THREE.MeshPhongMaterial({
                color: 0x111111,
                shininess: 200,
                transparent: true,
                opacity: 0.3,
                metalness: 0.9,
            });

            const vrHeadsetLensInnerMaterial = new THREE.MeshPhongMaterial({
                map: createVRTexture(),
                shininess: 200,
                transparent: true,
                opacity: 0.9,
            });

            const vrHeadsetFrameMaterial = new THREE.MeshPhongMaterial({
                color: '#0000',
                shininess: 150,
                metalness: 0.9,
            });

            const vrHeadsetBandMaterial = new THREE.MeshPhongMaterial({
                color: 0x222222,
                shininess: 10,
            });

            const vrHeadsetPaddingMaterial = new THREE.MeshPhongMaterial({
                color: '#000',
                shininess: 5,
            });

            // Wireframe material
            const wireframeMaterial = new THREE.MeshBasicMaterial({
                color: '    #000',
                wireframe: true,
                transparent: true,
                opacity: 0.8,
            });

            // Create initial mesh (iPhone - shown first)
            let meshGroup = new THREE.Group();
            let wireframeGroup = new THREE.Group();

            // iPhone mesh (initial state)
            const bodyMesh = new THREE.Mesh(iPhoneGeometry, iPhoneBodyMaterial);
            const screenGeometry = new THREE.PlaneGeometry(
                iPhoneGeometry.parameters.width * 0.9,
                iPhoneGeometry.parameters.height * 0.8
            );
            const screenMesh = new THREE.Mesh(screenGeometry, iPhoneScreenMaterial);
            screenMesh.position.z = iPhoneGeometry.parameters.depth / 2 + 0.01;
            const notchMesh = new THREE.Mesh(iPhoneNotchGeometry, iPhoneNotchMaterial);
            notchMesh.position.y = iPhoneGeometry.parameters.height / 2 - iPhoneNotchGeometry.parameters.height / 2;
            notchMesh.position.z = iPhoneGeometry.parameters.depth / 2 + 0.02;
            const buttonMesh = new THREE.Mesh(iPhoneButtonGeometry, iPhoneButtonMaterial);
            buttonMesh.position.x = -iPhoneGeometry.parameters.width / 2 - iPhoneButtonGeometry.parameters.radiusTop * 0.5;
            buttonMesh.position.y = iPhoneGeometry.parameters.height * 0.3;
            buttonMesh.rotation.z = Math.PI / 2;

            meshGroup.add(bodyMesh, screenMesh, notchMesh, buttonMesh);
            const wireframeMesh = new THREE.Mesh(iPhoneGeometry, wireframeMaterial);
            wireframeGroup.add(wireframeMesh);

            scene.add(meshGroup);
            scene.add(wireframeGroup);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x404040, 2);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);

            const pointLight = new THREE.PointLight(0x8b5cf6, 3, 100);
            pointLight.position.set(-5, -5, 5);
            scene.add(pointLight);

            const backLight = new THREE.PointLight(0x2dd4bf, 2, 50);
            backLight.position.set(0, 0, -10);
            scene.add(backLight);

            camera.position.set(0, 0, 10);
            camera.lookAt(0, 0, 0);

            // Store references
            sceneRef.current = { scene, camera, renderer, meshGroup, wireframeGroup };
            meshRef.current = {
                meshGroup,
                wireframeGroup,
                geometries: {
                    website: websiteGeometry,
                    browserFrame: browserFrameGeometry,
                    iPhone: iPhoneGeometry,
                    iPhoneNotch: iPhoneNotchGeometry,
                    iPhoneButton: iPhoneButtonGeometry,
                    vrHeadset: {
                        body: vrHeadsetBodyGeometry,
                        lens: vrHeadsetLensGeometry,
                        lensInner: vrHeadsetLensInnerGeometry,
                        frame: vrHeadsetFrameGeometry,
                        band: vrHeadsetBandGeometry,
                        padding: vrHeadsetPaddingGeometry
                    }
                },
                materials: {
                    website: websiteMaterial,
                    browserFrame: browserFrameMaterial,
                    iPhone: {
                        body: iPhoneBodyMaterial,
                        screen: iPhoneScreenMaterial,
                        notch: iPhoneNotchMaterial,
                        button: iPhoneButtonMaterial
                    },
                    vrHeadset: {
                        body: vrHeadsetMaterial,
                        lens: vrHeadsetLensMaterial,
                        lensInner: vrHeadsetLensInnerMaterial,
                        frame: vrHeadsetFrameMaterial,
                        band: vrHeadsetBandMaterial,
                        padding: vrHeadsetPaddingMaterial
                    },
                    wireframe: wireframeMaterial
                }
            };

            // Handle resize
            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                if (container.contains(renderer.domElement)) {
                    container.removeChild(renderer.domElement);
                }
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }
                renderer.dispose();

                // Dispose geometries and materials
                Object.values(meshRef.current.geometries).forEach(geo => {
                    if (geo instanceof THREE.BufferGeometry) geo.dispose();
                    else if (typeof geo === 'object') {
                        Object.values(geo).forEach(g => g.dispose());
                    }
                });

                Object.values(meshRef.current.materials).forEach(mat => {
                    if (mat instanceof THREE.Material) mat.dispose();
                    else if (typeof mat === 'object') {
                        Object.values(mat).forEach(m => m.dispose());
                    }
                });
            };
        }, []);

        // Animate 3D model based on scroll
        useEffect(() => {
            let animationId;

            const animate = () => {
                if (!meshRef.current || !sceneRef.current) return;

                const {
                    meshGroup,
                    wireframeGroup,
                    geometries,
                    materials
                } = meshRef.current;
                const { camera, renderer, scene } = sceneRef.current;

                // Clear current meshes
                while (meshGroup.children.length > 0) {
                    meshGroup.remove(meshGroup.children[0]);
                }
                while (wireframeGroup.children.length > 0) {
                    wireframeGroup.remove(wireframeGroup.children[0]);
                }

                // Determine model based on scroll progress (reversed order - iPhone first)
                if (scrollProgress < 33) {
                    // iPhone with detailed components
                    const bodyMesh = new THREE.Mesh(geometries.iPhone, materials.iPhone.body);

                    // Screen
                    const screenGeometry = new THREE.PlaneGeometry(
                        geometries.iPhone.parameters.width * 0.9,
                        geometries.iPhone.parameters.height * 0.8
                    );
                    const screenMesh = new THREE.Mesh(screenGeometry, materials.iPhone.screen);
                    screenMesh.position.z = geometries.iPhone.parameters.depth / 2 + 0.01;

                    // Notch
                    const notchMesh = new THREE.Mesh(geometries.iPhoneNotch, materials.iPhone.notch);
                    notchMesh.position.y = geometries.iPhone.parameters.height / 2 - geometries.iPhoneNotch.parameters.height / 2;
                    notchMesh.position.z = geometries.iPhone.parameters.depth / 2 + 0.02;

                    // Side button
                    const buttonMesh = new THREE.Mesh(geometries.iPhoneButton, materials.iPhone.button);
                    buttonMesh.position.x = -geometries.iPhone.parameters.width / 2 - geometries.iPhoneButton.parameters.radiusTop * 0.5;
                    buttonMesh.position.y = geometries.iPhone.parameters.height * 0.3;
                    buttonMesh.rotation.z = Math.PI / 2;

                    meshGroup.add(bodyMesh, screenMesh, notchMesh, buttonMesh);

                    // Wireframe
                    const wireframeMesh = new THREE.Mesh(geometries.iPhone, materials.wireframe);
                    wireframeGroup.add(wireframeMesh);
                } else if (scrollProgress < 76) {
                    // Website with browser frame
                    const mesh = new THREE.Mesh(geometries.website, materials.website);
                    const frame = new THREE.Mesh(geometries.browserFrame, materials.browserFrame);
                    frame.position.z = -0.03;
                    meshGroup.add(mesh, frame);

                    const wireframeMesh = new THREE.Mesh(geometries.website, materials.wireframe);
                    wireframeGroup.add(wireframeMesh);
                } else {
                    // Vision Pro Headset with detailed components
                    const bodyMesh = new THREE.Mesh(geometries.vrHeadset.body, materials.vrHeadset.body);
                    const lens1 = new THREE.Mesh(geometries.vrHeadset.lens, materials.vrHeadset.lens);
                    const lens2 = new THREE.Mesh(geometries.vrHeadset.lens, materials.vrHeadset.lens);
                    const lensInner1 = new THREE.Mesh(geometries.vrHeadset.lensInner, materials.vrHeadset.lensInner);
                    const lensInner2 = new THREE.Mesh(geometries.vrHeadset.lensInner, materials.vrHeadset.lensInner);
                    const frame = new THREE.Mesh(geometries.vrHeadset.frame, materials.vrHeadset.frame);
                    const band1 = new THREE.Mesh(geometries.vrHeadset.band, materials.vrHeadset.band);
                    const band2 = new THREE.Mesh(geometries.vrHeadset.band, materials.vrHeadset.band);
                    const padding = new THREE.Mesh(geometries.vrHeadset.padding, materials.vrHeadset.padding);

                    // Position elements
                    bodyMesh.rotation.x = -Math.PI / 4;

                    lens1.position.set(-0.8, 0.2, 0.8);
                    lens2.position.set(0.8, 0.2, 0.8);
                    lens1.rotation.x = Math.PI / 2;
                    lens2.rotation.x = Math.PI / 2;

                    lensInner1.position.copy(lens1.position);
                    lensInner2.position.copy(lens2.position);
                    lensInner1.rotation.copy(lens1.rotation);
                    lensInner2.rotation.copy(lens2.rotation);
                    lensInner1.position.z += 0.01;
                    lensInner2.position.z += 0.01;

                    frame.position.set(0, 0.5, 0);
                    frame.rotation.x = Math.PI / 2;

                    band1.position.set(0, 0.8, 0);
                    band1.rotation.z = Math.PI / 2;
                    band2.position.set(0, -0.8, 0);
                    band2.rotation.z = Math.PI / 2;

                    padding.position.set(0, 0.5, 0);
                    padding.rotation.x = Math.PI / 2;

                    meshGroup.add(bodyMesh, lens1, lens2, lensInner1, lensInner2, frame, band1, band2, padding);

                    // Wireframe
                    const wireframeBody = new THREE.Mesh(geometries.vrHeadset.body, materials.wireframe);
                    wireframeBody.rotation.x = -Math.PI / 4;
                    const wireframeLens1 = new THREE.Mesh(geometries.vrHeadset.lens, materials.wireframe);
                    const wireframeLens2 = new THREE.Mesh(geometries.vrHeadset.lens, materials.wireframe);
                    wireframeLens1.position.copy(lens1.position);
                    wireframeLens2.position.copy(lens2.position);
                    wireframeLens1.rotation.copy(lens1.rotation);
                    wireframeLens2.rotation.copy(lens2.rotation);

                    wireframeGroup.add(wireframeBody, wireframeLens1, wireframeLens2);
                }

                // Rotate based on scroll progress
                const scrollRotation = (scrollProgress / 100) * Math.PI * 4;
                meshGroup.rotation.set(
                    scrollRotation * 0.5,
                    scrollRotation,
                    scrollRotation * 0.3
                );
                wireframeGroup.rotation.copy(meshGroup.rotation);

                // Add mouse interaction
                meshGroup.rotation.x += (mousePosition.y - 0.5) * 0.1;
                meshGroup.rotation.y += (mousePosition.x - 0.5) * 0.1;
                wireframeGroup.rotation.copy(meshGroup.rotation);

                // Scale based on scroll
                const scale = 1 + Math.sin(scrollProgress * 0.02) * 0.1;
                meshGroup.scale.set(scale, scale, scale);
                wireframeGroup.scale.copy(meshGroup.scale);

                // Animate camera position
                camera.position.set(
                    Math.sin(scrollProgress * 0.01) * 2,
                    Math.cos(scrollProgress * 0.01) * 1,
                    10
                );
                camera.lookAt(0, 0, 0);

                renderer.render(scene, camera);
                animationId = requestAnimationFrame(animate);
                animationFrameRef.current = animationId;
            };

            animationId = requestAnimationFrame(animate);

            return () => {
                cancelAnimationFrame(animationId);
            };
        }, [scrollProgress, mousePosition]);

        return (
            <div
                ref={threeContainerRef}
                className="fixed top-0 left-0 w-full h-full"
                style={{
                    zIndex: 5,
                    pointerEvents: 'none'
                }}
            />
        );
    }

    export default ThreeScene;