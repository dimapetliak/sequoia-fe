(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/UI/atoms/Decoration/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "decoration": "styles-module-scss-module__TrpDaG__decoration",
  "default": "styles-module-scss-module__TrpDaG__default",
  "filled": "styles-module-scss-module__TrpDaG__filled",
  "floatUp": "styles-module-scss-module__TrpDaG__floatUp",
  "floatingEmoji": "styles-module-scss-module__TrpDaG__floatingEmoji",
  "oval": "styles-module-scss-module__TrpDaG__oval",
  "ovalWrapper": "styles-module-scss-module__TrpDaG__ovalWrapper",
  "round": "styles-module-scss-module__TrpDaG__round",
});
}}),
"[project]/src/components/UI/atoms/Decoration/Decoration.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Decoration": (()=>Decoration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Decoration/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Decoration = ({ children, variant = "filled", shape = "round", emoji: providedEmoji, className, decorationWrapperClassName })=>{
    _s();
    const [floatingEmojis, setFloatingEmojis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [counter, setCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleClick = (event)=>{
        if (emoji) {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const offsetX = x + (Math.random() * 40 - 20);
            const offsetY = y + (Math.random() * 10 - 20);
            const newEmoji = {
                id: counter,
                emoji,
                x: offsetX,
                y: offsetY
            };
            setFloatingEmojis((prev)=>[
                    ...prev,
                    newEmoji
                ]);
            setCounter((prev)=>prev + 1);
            setTimeout(()=>{
                setFloatingEmojis((prev)=>prev.filter((e)=>e.id !== newEmoji.id));
            }, 1000);
        }
    };
    const emoji = providedEmoji;
    const renderEmojis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Decoration.useCallback[renderEmojis]": ()=>{
            return floatingEmojis.map({
                "Decoration.useCallback[renderEmojis]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingEmoji,
                        style: {
                            position: "absolute",
                            left: `${item.x}px`,
                            top: `${item.y}px`,
                            pointerEvents: "none",
                            zIndex: 1000
                        },
                        children: item.emoji
                    }, item.id, false, {
                        fileName: "[project]/src/components/UI/atoms/Decoration/Decoration.tsx",
                        lineNumber: 80,
                        columnNumber: 7
                    }, this)
            }["Decoration.useCallback[renderEmojis]"]);
        }
    }["Decoration.useCallback[renderEmojis]"], [
        floatingEmojis
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: handleClick,
        style: emoji ? {
            cursor: "pointer"
        } : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decoration, variant && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant], shape && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][shape], className),
        children: [
            shape === "oval" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ovalWrapper, decorationWrapperClassName),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/UI/atoms/Decoration/Decoration.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this) : children,
            renderEmojis()
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/atoms/Decoration/Decoration.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
};
_s(Decoration, "x1pYKWiMUSmjSzSgjLPAR3ZR4Ks=");
_c = Decoration;
var _c;
__turbopack_context__.k.register(_c, "Decoration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/ParallaxWrapper/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "contentWrapper": "styles-module-scss-module__R4Qz5W__contentWrapper",
  "parallaxContent": "styles-module-scss-module__R4Qz5W__parallaxContent",
  "parallaxWrapper": "styles-module-scss-module__R4Qz5W__parallaxWrapper",
});
}}),
"[project]/src/components/UI/atoms/ParallaxWrapper/ParallaxWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ParallaxWrapper": (()=>ParallaxWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$ParallaxWrapper$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/ParallaxWrapper/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ParallaxWrapper = ({ children, className, intensity = 20, reverse = false, disabled = false, style, initialBackgroundPosition = {
    x: 50,
    y: 50
} })=>{
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Convert string position to object if needed
    const getPositionObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParallaxWrapper.useCallback[getPositionObject]": ()=>{
            if (typeof initialBackgroundPosition === "string") {
                const parts = initialBackgroundPosition.split(" ");
                // Parse position values
                const parsePositionValue = {
                    "ParallaxWrapper.useCallback[getPositionObject].parsePositionValue": (value)=>{
                        if (value === "center") return 50;
                        if (value === "top" || value === "left") return 0;
                        if (value === "bottom" || value === "right") return 100;
                        // Remove % if present and parse
                        return parseInt(value.replace("%", "")) || 50;
                    }
                }["ParallaxWrapper.useCallback[getPositionObject].parsePositionValue"];
                return {
                    x: parsePositionValue(parts[0] || "center"),
                    y: parsePositionValue(parts.length > 1 ? parts[1] : "center")
                };
            }
            return initialBackgroundPosition;
        }
    }["ParallaxWrapper.useCallback[getPositionObject]"], [
        initialBackgroundPosition
    ]);
    // Store the initial position in a ref for calculations
    const initialPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(getPositionObject());
    // Initialize state position with the initial position
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getPositionObject());
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // For animation
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(getPositionObject());
    // Update initialPositionRef if initialBackgroundPosition changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxWrapper.useEffect": ()=>{
            initialPositionRef.current = getPositionObject();
            setPosition(getPositionObject()); // Reset current position
            targetPositionRef.current = getPositionObject(); // Reset target position
        }
    }["ParallaxWrapper.useEffect"], [
        initialBackgroundPosition,
        getPositionObject
    ]);
    // Detect if device is mobile/tablet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxWrapper.useEffect": ()=>{
            const checkIfMobile = {
                "ParallaxWrapper.useEffect.checkIfMobile": ()=>{
                    const mobileBreakpoint = 1440;
                    setIsMobile(window.innerWidth <= mobileBreakpoint);
                }
            }["ParallaxWrapper.useEffect.checkIfMobile"];
            // Initial check
            checkIfMobile();
            // Add event listener for resize
            window.addEventListener("resize", checkIfMobile);
            // Cleanup
            return ({
                "ParallaxWrapper.useEffect": ()=>{
                    window.removeEventListener("resize", checkIfMobile);
                }
            })["ParallaxWrapper.useEffect"];
        }
    }["ParallaxWrapper.useEffect"], []);
    // Animation function
    const positionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(getPositionObject());
    // Update positionRef when position state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxWrapper.useEffect": ()=>{
            positionRef.current = position;
        }
    }["ParallaxWrapper.useEffect"], [
        position
    ]);
    const animate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParallaxWrapper.useCallback[animate]": ()=>{
            // If mobile/tablet, don't animate
            if (isMobile) return;
            // Use a faster easing when hovering and slower when exiting
            const ease = isExiting ? 0.05 : 0.15;
            const dx = targetPositionRef.current.x - positionRef.current.x;
            const dy = targetPositionRef.current.y - positionRef.current.y;
            // Only update if there's a significant change
            if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
                // Calculate new position
                const newX = positionRef.current.x + dx * ease;
                const newY = positionRef.current.y + dy * ease;
                // Important: Update ref immediately so calculations stay accurate
                positionRef.current = {
                    x: newX,
                    y: newY
                };
                // Then schedule state update (which won't cause immediate re-render)
                setPosition({
                    x: newX,
                    y: newY
                });
            } else if (isExiting) {
                // Once we're close enough to the center, stop the exiting state
                setIsExiting(false);
            }
            requestRef.current = requestAnimationFrame(animate);
        }
    }["ParallaxWrapper.useCallback[animate]"], [
        isExiting,
        isMobile
    ]); // Removed position from dependencies
    // Start/stop animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxWrapper.useEffect": ()=>{
            if (!isMobile) {
                requestRef.current = requestAnimationFrame(animate);
            }
            return ({
                "ParallaxWrapper.useEffect": ()=>{
                    if (requestRef.current) {
                        cancelAnimationFrame(requestRef.current);
                    }
                }
            })["ParallaxWrapper.useEffect"];
        }
    }["ParallaxWrapper.useEffect"], [
        animate,
        isMobile
    ]);
    const handleMouseEnter = ()=>{
        if (disabled || isMobile) return;
        setIsHovering(true);
        setIsExiting(false);
    };
    const handleMouseLeave = ()=>{
        if (disabled || isMobile) return;
        setIsHovering(false);
        setIsExiting(true);
        // Reset to initial position when mouse leaves
        targetPositionRef.current = initialPositionRef.current;
    };
    const handleMouseMove = (e)=>{
        if (disabled || !isHovering || !wrapperRef.current || isMobile) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        // Calculate relative position (0-1)
        const relX = (e.clientX - rect.left) / rect.width;
        const relY = (e.clientY - rect.top) / rect.height;
        // Direction modifier
        const dir = reverse ? -1 : 1;
        // Get initial position
        const baseX = initialPositionRef.current.x;
        const baseY = initialPositionRef.current.y;
        // Calculate new position based on initial position as the center point
        // This is key - we're now calculating the movement AROUND the initial position
        const offsetX = dir * (relX - 0.5) * intensity;
        const offsetY = dir * (relY - 0.5) * intensity;
        const newX = baseX + offsetX;
        const newY = baseY + offsetY;
        // Update target (actual animation happens in the animate function)
        targetPositionRef.current = {
            x: newX,
            y: newY
        };
    };
    // Format the background position for CSS
    const getBackgroundPositionStyle = (pos)=>{
        // For pixel values (like "-80px -525px"), we'll convert them differently
        if (typeof initialBackgroundPosition === "string" && initialBackgroundPosition.includes("px")) {
            // Extract pixel values and add offsets
            const initialPos = initialPositionRef.current;
            const offsetX = pos.x - initialPos.x;
            const offsetY = pos.y - initialPos.y;
            // Apply offsets to original pixel positions
            const parts = initialBackgroundPosition.split(" ");
            const originalX = parseInt(parts[0]);
            const originalY = parseInt(parts[1]);
            return `${originalX + offsetX}px ${originalY + offsetY}px`;
        }
        // Standard percentage values
        return `${pos.x}% ${pos.y}%`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$ParallaxWrapper$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].parallaxWrapper, className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseMove: handleMouseMove,
        style: {
            ...style,
            ...isMobile ? {
                backgroundPosition: typeof initialBackgroundPosition === "string" ? initialBackgroundPosition : `${initialPositionRef.current.x}% ${initialPositionRef.current.y}%`
            } : {
                backgroundPosition: getBackgroundPositionStyle(position),
                transition: "none"
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/UI/atoms/ParallaxWrapper/ParallaxWrapper.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
};
_s(ParallaxWrapper, "jwjzejGdFQHnM07L8KlOa3HK5qQ=");
_c = ParallaxWrapper;
var _c;
__turbopack_context__.k.register(_c, "ParallaxWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/BlogCard/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "card": "styles-module-scss-module__vaMGVG__card",
  "date": "styles-module-scss-module__vaMGVG__date",
  "heading": "styles-module-scss-module__vaMGVG__heading",
  "link": "styles-module-scss-module__vaMGVG__link",
  "tags": "styles-module-scss-module__vaMGVG__tags",
  "thumbnail": "styles-module-scss-module__vaMGVG__thumbnail",
  "title": "styles-module-scss-module__vaMGVG__title",
});
}}),
"[project]/src/components/UI/molecules/Tag/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "styles-module-scss-module__ZYN21W__active",
  "default": "styles-module-scss-module__ZYN21W__default",
  "disabled": "styles-module-scss-module__ZYN21W__disabled",
  "outline": "styles-module-scss-module__ZYN21W__outline",
  "removeBtn": "styles-module-scss-module__ZYN21W__removeBtn",
  "tag": "styles-module-scss-module__ZYN21W__tag",
});
}}),
"[project]/src/components/UI/molecules/Tag/Tag.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tag": (()=>Tag)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/Tag/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Close$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/Close.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const Tag = ({ label, isActive = false, isDisabled = false, onClick, onRemove = ()=>{}, variant = "default", className })=>{
    const handleClick = ()=>{
        if (!isDisabled && onClick) onClick();
    };
    const handleRemove = (e)=>{
        e.stopPropagation();
        if (!isDisabled && onRemove) onRemove();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant], isActive && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active, isDisabled && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled, className),
        onClick: handleClick,
        "aria-disabled": isDisabled,
        children: [
            label,
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeBtn,
                onClick: handleRemove,
                "aria-label": "Remove tag",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Close$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {}, void 0, false, {
                    fileName: "[project]/src/components/UI/molecules/Tag/Tag.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/molecules/Tag/Tag.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/molecules/Tag/Tag.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
_c = Tag;
var _c;
__turbopack_context__.k.register(_c, "Tag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/Tag/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/Tag/Tag.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/Tag/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/Tag/Tag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/Tag/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BlogCard": (()=>BlogCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/BlogCard/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/Tag/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/Tag/Tag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Typography$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Typography/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Typography/Typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$ElementWrapper$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/ElementWrapper/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$ElementWrapper$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/ElementWrapper/ElementWrapper.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
const BlogCard = ({ title, thumbnail, tags, publishedAt, href, bannerTitle = "NEW NFT COLLECTION", className })=>{
    const readableDate = new Date(publishedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card, className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
            "aria-label": `Read blog post: ${title}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$ElementWrapper$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementWrapper"], {
                    variants: "transparent",
                    borderRadius: "small",
                    backgroundImageUrl: thumbnail || "/assets/waterTile.png",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnail,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                        as: "h3",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                        children: bannerTitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tags,
                            children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Tag$2f$Tag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                                    label: tag
                                }, tag, false, {
                                    fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                            as: "h4",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                            dateTime: publishedAt,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].date,
                            children: readableDate
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_c = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/BlogCard/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/BlogCard/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/BlogCard/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/UI/molecules/ButtonControls/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "controlsContainer": "styles-module-scss-module__kgZv7W__controlsContainer",
});
}}),
"[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ButtonControls": (()=>ButtonControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$ArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/ArrowLeft.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$ArrowRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/ArrowRight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const ButtonControls = ({ children, onMoveBackward, onMoveForward, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsContainer, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outlined",
                onClick: onMoveBackward,
                leftIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$ArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft"], {}, void 0, false, {
                    fileName: "[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx",
                    lineNumber: 26,
                    columnNumber: 19
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outlined",
                onClick: onMoveForward,
                rightIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$ArrowRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight"], {}, void 0, false, {
                    fileName: "[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx",
                    lineNumber: 32,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_c = ButtonControls;
var _c;
__turbopack_context__.k.register(_c, "ButtonControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/ButtonControls/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$ButtonControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/ButtonControls/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$ButtonControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/UI/organisms/BlogCarousel/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "blogCarousel": "styles-module-scss-module__aScddG__blogCarousel",
});
}}),
"[project]/src/components/UI/organisms/BlogCarousel/BlogCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BlogCarousel": (()=>BlogCarousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/BlogCard/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/BlogCard/BlogCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$ButtonControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$BlogCarousel$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/organisms/BlogCarousel/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SLIDER_SETTINGS = {
    dots: false,
    arrows: false,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$BlogCarousel$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const MOCK_POSTS = [
    {
        title: "How to Build Accessible Blog Cards in React",
        thumbnail: "",
        tags: [
            "Accessibility",
            "React",
            "SEO"
        ],
        publishedAt: "2025-04-29",
        href: "/blog/accessibility-guide"
    },
    {
        title: "10 Tips for Writing Clean Code in JavaScript",
        thumbnail: "",
        tags: [
            "JavaScript",
            "Best Practices",
            "Coding"
        ],
        publishedAt: "2025-03-15",
        href: "/blog/clean-code-tips"
    },
    {
        title: "Understanding React Hooks: A Beginner's Guide",
        thumbnail: "",
        tags: [
            "React",
            "Hooks",
            "JavaScript"
        ],
        publishedAt: "2025-02-10",
        href: "/blog/react-hooks-guide"
    },
    {
        title: "Improving Web Performance with Lazy Loading",
        thumbnail: "",
        tags: [
            "Performance",
            "Web Development",
            "Optimization"
        ],
        publishedAt: "2025-01-20",
        href: "/blog/lazy-loading"
    },
    {
        title: "Mastering CSS Grid for Responsive Design",
        thumbnail: "",
        tags: [
            "CSS",
            "Responsive Design",
            "Frontend"
        ],
        publishedAt: "2024-12-05",
        href: "/blog/css-grid-guide"
    }
];
const BlogCarousel = ({})=>{
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const moveToNext = ()=>{
        if (sliderRef.current) {
            sliderRef?.current?.slickNext();
        }
    };
    const moveToPrev = ()=>{
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$BlogCarousel$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blogCarousel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: sliderRef,
                ...SLIDER_SETTINGS,
                children: MOCK_POSTS.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$BlogCard$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlogCard"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$BlogCarousel$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        title: post.title,
                        thumbnail: post.thumbnail,
                        tags: post.tags,
                        publishedAt: post.publishedAt,
                        href: post.href
                    }, index, false, {
                        fileName: "[project]/src/components/UI/organisms/BlogCarousel/BlogCarousel.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/UI/organisms/BlogCarousel/BlogCarousel.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$ButtonControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonControls"], {
                onMoveBackward: moveToPrev,
                onMoveForward: moveToNext
            }, void 0, false, {
                fileName: "[project]/src/components/UI/organisms/BlogCarousel/BlogCarousel.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/organisms/BlogCarousel/BlogCarousel.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
};
_s(BlogCarousel, "wjKMYkN3mXB32DfSYznkohhJ8nw=");
_c = BlogCarousel;
var _c;
__turbopack_context__.k.register(_c, "BlogCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/FigureItem/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "content": "styles-module-scss-module__tFrfOa__content",
  "decoration": "styles-module-scss-module__tFrfOa__decoration",
  "figureItem": "styles-module-scss-module__tFrfOa__figureItem",
  "fill": "styles-module-scss-module__tFrfOa__fill",
  "left": "styles-module-scss-module__tFrfOa__left",
  "mobile": "styles-module-scss-module__tFrfOa__mobile",
  "outline": "styles-module-scss-module__tFrfOa__outline",
  "top": "styles-module-scss-module__tFrfOa__top",
});
}}),
"[project]/src/components/UI/molecules/FigureItem/FigureItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FigureItem": (()=>FigureItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$FigureItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/FigureItem/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const FigureItem = ({ className, value, description, children, isMobile = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$FigureItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].figureItem, isMobile && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$FigureItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobile, className),
        children: children || value && description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$FigureItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: value
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/molecules/FigureItem/FigureItem.tsx",
                    lineNumber: 29,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/molecules/FigureItem/FigureItem.tsx",
                    lineNumber: 30,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UI/molecules/FigureItem/FigureItem.tsx",
            lineNumber: 28,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UI/molecules/FigureItem/FigureItem.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_c = FigureItem;
var _c;
__turbopack_context__.k.register(_c, "FigureItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/RoadmapTile/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "styles-module-scss-module__aEIVQG__active",
  "activeConnector": "styles-module-scss-module__aEIVQG__activeConnector",
  "circle": "styles-module-scss-module__aEIVQG__circle",
  "connector": "styles-module-scss-module__aEIVQG__connector",
  "descriptionList": "styles-module-scss-module__aEIVQG__descriptionList",
  "descriptionListItem": "styles-module-scss-module__aEIVQG__descriptionListItem",
  "iconContainer": "styles-module-scss-module__aEIVQG__iconContainer",
  "line": "styles-module-scss-module__aEIVQG__line",
  "point": "styles-module-scss-module__aEIVQG__point",
  "roadmapTileContainer": "styles-module-scss-module__aEIVQG__roadmapTileContainer",
  "tile": "styles-module-scss-module__aEIVQG__tile",
  "title": "styles-module-scss-module__aEIVQG__title",
});
}}),
"[project]/src/utils/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "backgroundMapper": (()=>backgroundMapper),
    "isDesktopScreen": (()=>isDesktopScreen)
});
const isDesktopScreen = ()=>{
    return window.innerWidth > 1024;
};
const backgroundMapper = {
    blue: "/assets/teamMemberBlue.png",
    green: "/assets/teamMemberGreen.png",
    purple: "/assets/teamMemberPurple.png",
    pink: "/assets/teamMemberPink.png",
    yellow: "/assets/teamMemberYellow.png"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RoadmapTile": (()=>RoadmapTile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/RoadmapTile/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Typography$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Typography/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Typography/Typography.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
// Animation variants
const pointVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};
const connectorVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            staggerChildren: 0.2,
            when: "beforeChildren"
        }
    }
};
const connectorChildVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4
        }
    }
};
const tileVariants = {
    hidden: {
        opacity: 0,
        x: 20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.8,
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};
const contentVariants = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    }
};
// Enhanced active state animation variants
const activeConnectorVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.15,
            when: "beforeChildren"
        }
    }
};
const activeConnectorChildVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    }
};
const activeTileVariants = {
    hidden: {
        opacity: 0,
        x: 20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.12
        }
    }
};
const activeContentVariants = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    }
};
const RoadmapTile = ({ point, title, descriptionList, icon, parentRef, isActive, currentIndex, className })=>{
    _s();
    const tileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isOverflowing, setIsOverflowing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [renderAbove, setRenderAbove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tileHeight = tileRef?.current?.getBoundingClientRect().height;
    // Animation controls for sequencing
    const connectorControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const tileControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "RoadmapTile.useLayoutEffect": ()=>{
            const checkOverflow = {
                "RoadmapTile.useLayoutEffect.checkOverflow": ()=>{
                    if (tileRef.current && parentRef?.current) {
                        const tileRect = tileRef?.current?.getBoundingClientRect();
                        const parentRect = parentRef.current?.getBoundingClientRect();
                        const isOutOfBottom = tileRect.bottom > parentRect.bottom;
                        const isOutOfTop = tileRect.top < parentRect.top;
                        setIsOverflowing({
                            "RoadmapTile.useLayoutEffect.checkOverflow": (prev)=>{
                                const newValue = isOutOfBottom || isOutOfTop;
                                return prev !== newValue ? newValue : prev;
                            }
                        }["RoadmapTile.useLayoutEffect.checkOverflow"]);
                        setRenderAbove({
                            "RoadmapTile.useLayoutEffect.checkOverflow": (prev)=>{
                                const newValue = isOutOfBottom;
                                return prev !== newValue ? newValue : prev;
                            }
                        }["RoadmapTile.useLayoutEffect.checkOverflow"]);
                    }
                }
            }["RoadmapTile.useLayoutEffect.checkOverflow"];
            const checkDesktop = {
                "RoadmapTile.useLayoutEffect.checkDesktop": ()=>{
                    setIsDesktop((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDesktopScreen"])());
                }
            }["RoadmapTile.useLayoutEffect.checkDesktop"];
            checkOverflow();
            checkDesktop();
            window.addEventListener("resize", checkOverflow);
            window.addEventListener("resize", checkDesktop);
            return ({
                "RoadmapTile.useLayoutEffect": ()=>{
                    window.removeEventListener("resize", checkOverflow);
                    window.removeEventListener("resize", checkDesktop);
                }
            })["RoadmapTile.useLayoutEffect"];
        }
    }["RoadmapTile.useLayoutEffect"], [
        parentRef,
        currentIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoadmapTile.useEffect": ()=>{
            let isMounted = true;
            const animateSequence = {
                "RoadmapTile.useEffect.animateSequence": async ()=>{
                    if (!isMounted) return;
                    if (isActive) {
                        connectorControls.set("hidden");
                        tileControls.set("hidden");
                        await new Promise({
                            "RoadmapTile.useEffect.animateSequence": (resolve)=>requestAnimationFrame(resolve)
                        }["RoadmapTile.useEffect.animateSequence"]);
                        if (!isMounted) return;
                        await connectorControls.start("visible");
                        if (!isMounted) return;
                        // Then animate tile
                        await tileControls.start("visible");
                    } else {
                        connectorControls.start("visible");
                        tileControls.start("visible");
                    }
                }
            }["RoadmapTile.useEffect.animateSequence"];
            animateSequence();
            return ({
                "RoadmapTile.useEffect": ()=>{
                    isMounted = false;
                }
            })["RoadmapTile.useEffect"];
        }
    }["RoadmapTile.useEffect"], [
        isActive,
        currentIndex,
        connectorControls,
        tileControls
    ]);
    // Helper functions to select the appropriate animation variants
    const getTileStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoadmapTile.useCallback[getTileStyle]": ()=>{
            if (isActive && !isDesktop) {
                return {
                    position: "absolute",
                    top: isOverflowing && renderAbove && tileHeight ? `-${tileHeight - 20}px` : "90px"
                };
            }
            return undefined;
        }
    }["RoadmapTile.useCallback[getTileStyle]"], [
        isActive,
        isDesktop,
        isOverflowing,
        renderAbove,
        tileHeight
    ]);
    const getConnectorVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoadmapTile.useCallback[getConnectorVariants]": ()=>{
            return isActive ? activeConnectorVariants : connectorVariants;
        }
    }["RoadmapTile.useCallback[getConnectorVariants]"], [
        isActive
    ]);
    const getConnectorChildVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoadmapTile.useCallback[getConnectorChildVariants]": ()=>{
            return isActive ? activeConnectorChildVariants : connectorChildVariants;
        }
    }["RoadmapTile.useCallback[getConnectorChildVariants]"], [
        isActive
    ]);
    const getTileVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoadmapTile.useCallback[getTileVariants]": ()=>{
            return isActive ? activeTileVariants : tileVariants;
        }
    }["RoadmapTile.useCallback[getTileVariants]"], [
        isActive
    ]);
    const getContentVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RoadmapTile.useCallback[getContentVariants]": ()=>{
            return isActive ? activeContentVariants : contentVariants;
        }
    }["RoadmapTile.useCallback[getContentVariants]"], [
        isActive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        // variants={variants}
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roadmapTileContainer, className),
        children: [
            point && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].point,
                initial: "hidden",
                animate: "visible",
                variants: pointVariants,
                children: point
            }, void 0, false, {
                fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                lineNumber: 260,
                columnNumber: 9
            }, this),
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].connector, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeConnector]: isActive
                }),
                initial: "hidden",
                animate: connectorControls,
                variants: getConnectorVariants(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].circle,
                        variants: getConnectorChildVariants()
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                        variants: getConnectorChildVariants()
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconContainer,
                        variants: getConnectorChildVariants(),
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: tileRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tile, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: isActive && !isDesktop
                }),
                style: getTileStyle(),
                initial: "hidden",
                animate: tileControls,
                variants: getTileVariants(),
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: getContentVariants(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Typography$2f$Typography$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Typography"], {
                            as: "h4",
                            textAlign: "left",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    descriptionList.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descriptionList,
                        children: descriptionList.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descriptionListItem,
                                variants: getContentVariants(),
                                children: item
                            }, index, false, {
                                fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
};
_s(RoadmapTile, "JcAhYxaj3mINrZ+RMeyNiE8xfbY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = RoadmapTile;
var _c;
__turbopack_context__.k.register(_c, "RoadmapTile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/RoadmapTile/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$RoadmapTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/RoadmapTile/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$RoadmapTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/RoadmapTile/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/UI/organisms/Roadmap/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "buttonControls": "styles-module-scss-module__LV8vXq__buttonControls",
  "container": "styles-module-scss-module__LV8vXq__container",
  "roadmapContainer": "styles-module-scss-module__LV8vXq__roadmapContainer",
  "roadmapTile": "styles-module-scss-module__LV8vXq__roadmapTile",
});
}}),
"[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Roadmap": (()=>Roadmap),
    "roadmapData": (()=>roadmapData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)"); // Add this import
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/Loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$ButtonControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/ButtonControls/ButtonControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/RoadmapTile/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$RoadmapTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/RoadmapTile/RoadmapTile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$Roadmap$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/organisms/Roadmap/styles.module.scss.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const roadmapData = [
    {
        point: "Q1, 2025",
        title: "Eco Boost",
        descriptionList: [
            "Acquire 50 hectares of land for 1,000",
            "Planed Alpha Generation in April 2023",
            "Acquire land for beta, gamma, delta, epsilon and zeta generations"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
            lineNumber: 19,
            columnNumber: 11
        }, this)
    },
    {
        point: "Q2, 2025",
        title: "Green Expansion",
        descriptionList: [
            "Acquire 50 hectares of land for 1,000",
            "Planed Alpha Generation in April 2023",
            "Acquire land for beta, gamma, delta, epsilon and zeta generations"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
            lineNumber: 29,
            columnNumber: 11
        }, this)
    },
    {
        point: "Q3, 2025",
        title: "Sustainability Drive",
        descriptionList: [
            "Acquire 50 hectares of land for 1,000",
            "Planed Alpha Generation in April 2023",
            "Acquire land for beta, gamma, delta, epsilon and zeta generations"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
            lineNumber: 39,
            columnNumber: 11
        }, this)
    },
    {
        point: "Q3, 2025",
        title: "Sustainability Drive",
        descriptionList: [
            "Acquire 50 hectares of land for 1,000",
            "Planed Alpha Generation in April 2023",
            "Acquire land for beta, gamma, delta, epsilon and zeta generations"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
            lineNumber: 49,
            columnNumber: 11
        }, this)
    },
    {
        point: "Q3, 2025",
        title: "Sustainability Drive",
        descriptionList: [
            "Acquire 50 hectares of land for 1,000",
            "Planed Alpha Generation in April 2023",
            "Acquire land for beta, gamma, delta, epsilon and zeta generations"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
            lineNumber: 59,
            columnNumber: 11
        }, this)
    },
    {
        point: "Q3, 2025",
        title: "Sustainability Drive",
        descriptionList: [
            "Launch community awareness programs"
        ],
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {}, void 0, false, {
            fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
            lineNumber: 65,
            columnNumber: 11
        }, this)
    }
];
const Roadmap = ()=>{
    _s();
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const container = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    };
    const handleMoveBackward = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex - 1 + roadmapData.length) % roadmapData.length);
    };
    const handleMoveForward = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % roadmapData.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$Roadmap$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: divRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$Roadmap$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roadmapContainer,
                initial: "hidden",
                animate: "visible",
                variants: container,
                children: roadmapData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$RoadmapTile$2f$RoadmapTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoadmapTile"], {
                        isActive: index === currentIndex,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$Roadmap$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roadmapTile,
                        currentIndex: currentIndex,
                        point: item.point,
                        title: item.title,
                        descriptionList: item.descriptionList,
                        icon: item.icon,
                        parentRef: divRef
                    }, index, false, {
                        fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$ButtonControls$2f$ButtonControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonControls"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$Roadmap$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonControls,
                onMoveBackward: handleMoveBackward,
                onMoveForward: handleMoveForward
            }, void 0, false, {
                fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/organisms/Roadmap/Roadmap.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
};
_s(Roadmap, "kOUfxyjhDorNlk97RKSmlQ6L3oo=");
_c = Roadmap;
var _c;
__turbopack_context__.k.register(_c, "Roadmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/TeamMemberItem/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "clippedShape": "styles-module-scss-module__wSPGXq__clippedShape",
  "imageContainer": "styles-module-scss-module__wSPGXq__imageContainer",
  "teamMemberItemContainer": "styles-module-scss-module__wSPGXq__teamMemberItemContainer",
});
}}),
"[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TeamMemberItem": (()=>TeamMemberItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/TeamMemberItem/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const TeamMemberItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function TeamMemberItem({ imageUrl, className, backgroundColor = "blue", onClick }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamMemberItemContainer, className),
        style: {
            backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundMapper"][backgroundColor]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "bottom center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClick,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clippedShape,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    fill: true,
                    src: imageUrl ?? `${nextConfig.basePath}/assets/memberImage.png`,
                    alt: "Team member item picture"
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
});
_c1 = TeamMemberItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "TeamMemberItem$forwardRef");
__turbopack_context__.k.register(_c1, "TeamMemberItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/TeamMemberItem/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$TeamMemberItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/TeamMemberItem/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$TeamMemberItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/TeamMemberItem/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/UI/molecules/TeamMemberCard/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "backgroundFiller": "styles-module-scss-module__1CSzMG__backgroundFiller",
  "backgroundImage": "styles-module-scss-module__1CSzMG__backgroundImage",
  "cardContainer": "styles-module-scss-module__1CSzMG__cardContainer",
  "clippedBlob": "styles-module-scss-module__1CSzMG__clippedBlob",
  "clipperBackgroundFigure": "styles-module-scss-module__1CSzMG__clipperBackgroundFigure",
  "decoration": "styles-module-scss-module__1CSzMG__decoration",
  "descriptionContainer": "styles-module-scss-module__1CSzMG__descriptionContainer",
  "email": "styles-module-scss-module__1CSzMG__email",
  "imageContainer": "styles-module-scss-module__1CSzMG__imageContainer",
  "name": "styles-module-scss-module__1CSzMG__name",
  "position": "styles-module-scss-module__1CSzMG__position",
  "teamMemberCardContainer": "styles-module-scss-module__1CSzMG__teamMemberCardContainer",
});
}}),
"[project]/src/components/UI/atoms/CurveMask/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "bottom": "styles-module-scss-module__wpIK-G__bottom",
  "left": "styles-module-scss-module__wpIK-G__left",
  "middle": "styles-module-scss-module__wpIK-G__middle",
  "right": "styles-module-scss-module__wpIK-G__right",
  "top": "styles-module-scss-module__wpIK-G__top",
  "xAxisContainer": "styles-module-scss-module__wpIK-G__xAxisContainer",
  "yAxisContainer": "styles-module-scss-module__wpIK-G__yAxisContainer",
});
}}),
"[project]/src/components/UI/atoms/CurveMask/CurveMask.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CurveMask": (()=>CurveMask)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/CurveMask/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
const CurveMask = ({ position = "top", side = "left", xAxisClassName, yAxisClassName, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].xAxisContainer, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][position], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][side], xAxisClassName)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/atoms/CurveMask/CurveMask.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].yAxisContainer, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][position], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][side], yAxisClassName)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/atoms/CurveMask/CurveMask.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_c = CurveMask;
var _c;
__turbopack_context__.k.register(_c, "CurveMask");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/Decoration/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$Decoration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Decoration/Decoration.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/Decoration/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$Decoration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Decoration/Decoration.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Decoration/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/UI/atoms/IconWithMask/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "bottomPosition": "styles-module-scss-module__3FiHla__bottomPosition",
  "centerPosition": "styles-module-scss-module__3FiHla__centerPosition",
  "decoration": "styles-module-scss-module__3FiHla__decoration",
  "leftPosition": "styles-module-scss-module__3FiHla__leftPosition",
  "middlePosition": "styles-module-scss-module__3FiHla__middlePosition",
  "rightPosition": "styles-module-scss-module__3FiHla__rightPosition",
  "topPosition": "styles-module-scss-module__3FiHla__topPosition",
});
}}),
"[project]/src/components/UI/atoms/IconWithMask/IconWithMask.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconWithMask": (()=>IconWithMask)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$CurveMask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/CurveMask/CurveMask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Decoration/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$Decoration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Decoration/Decoration.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/IconWithMask/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
;
;
const IconWithMask = ({ content, variant, shape, horizontalPosition = "left", verticalPosition = "top", emoji, decorationClassName, customXAxisClassName, customYAxisClassName, decorationWrapperClassName })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$CurveMask$2f$CurveMask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurveMask"], {
        xAxisClassName: customXAxisClassName,
        yAxisClassName: customYAxisClassName,
        side: horizontalPosition === "center" ? undefined : horizontalPosition,
        position: verticalPosition,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Decoration$2f$Decoration$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Decoration"], {
            emoji: emoji,
            variant: variant,
            shape: shape,
            decorationWrapperClassName: decorationWrapperClassName,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decoration, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`${horizontalPosition}Position`], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][`${verticalPosition}Position`], decorationClassName),
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/UI/atoms/IconWithMask/IconWithMask.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/UI/atoms/IconWithMask/IconWithMask.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_c = IconWithMask;
var _c;
__turbopack_context__.k.register(_c, "IconWithMask");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/IconWithMask/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$IconWithMask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/IconWithMask/IconWithMask.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/atoms/IconWithMask/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$IconWithMask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/IconWithMask/IconWithMask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/IconWithMask/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/next.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const nextConfig = {
    basePath: "/sequoia-fe",
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true
    }
};
const __TURBOPACK__default__export__ = nextConfig;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TeamMemberCard": (()=>TeamMemberCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/TeamMemberCard/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Flash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/Flash.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Star$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/Icons/Star.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/IconWithMask/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$IconWithMask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/IconWithMask/IconWithMask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next.config.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const contentVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.25,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};
const backgroundVariants = {
    initial: {
        scale: 2.05
    },
    animate: {
        scale: 2,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
    exit: {
        scale: 2.05,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
};
const TeamMemberCard = ({ imageUrl, name, position, email, backgroundVariant, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamMemberCardContainer, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clipperBackgroundFigure,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundFiller,
                                style: backgroundVariant ? {
                                    backgroundColor: "transparent"
                                } : undefined,
                                children: backgroundVariant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: backgroundVariants,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundImageWrapper,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundImage,
                                        fill: true,
                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$next$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].basePath}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundMapper"][backgroundVariant]}`,
                                        alt: "Card background picture",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fill: true,
                                    objectFit: "contain",
                                    src: imageUrl || `${__TURBOPACK__imported__module__$5b$project$5d2f$next$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].basePath}/assets/memberImage.png`,
                                    alt: "Team member card picture",
                                    quality: 100
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$IconWithMask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWithMask"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Star$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Star"], {}, void 0, false, {
                            fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                            lineNumber: 105,
                            columnNumber: 20
                        }, void 0),
                        variant: "outline",
                        shape: "oval",
                        verticalPosition: "bottom",
                        horizontalPosition: "left"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].descriptionContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clippedBlob,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                        variants: contentVariants,
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        custom: 0,
                                        children: name
                                    }, `name-${name}`, false, {
                                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    position && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].position,
                                        variants: contentVariants,
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        custom: 1,
                                        children: position
                                    }, `position-${position}`, false, {
                                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: contentVariants,
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "exit",
                                        custom: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `mailto:${email}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].email,
                                            children: email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this)
                                    }, `email-${email}`, false, {
                                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$IconWithMask$2f$IconWithMask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWithMask"], {
                        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$Icons$2f$Flash$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flash"], {}, void 0, false, {
                            fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                            lineNumber: 161,
                            columnNumber: 20
                        }, void 0),
                        variant: "outline",
                        shape: "oval",
                        verticalPosition: "top",
                        horizontalPosition: "left"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_c = TeamMemberCard;
var _c;
__turbopack_context__.k.register(_c, "TeamMemberCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/TeamMemberCard/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/molecules/TeamMemberCard/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/TeamMemberCard/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/UI/organisms/TeamMembers/styles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "sliderItem": "styles-module-scss-module__7QX-DW__sliderItem",
  "teamMembersContainer": "styles-module-scss-module__7QX-DW__teamMembersContainer",
  "teamMembersList": "styles-module-scss-module__7QX-DW__teamMembersList",
  "teamMembersSlider": "styles-module-scss-module__7QX-DW__teamMembersSlider",
});
}}),
"[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TeamMembers": (()=>TeamMembers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/TeamMemberItem/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$TeamMemberItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/atoms/TeamMemberItem/TeamMemberItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/TeamMemberCard/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/molecules/TeamMemberCard/TeamMemberCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$TeamMembers$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/UI/organisms/TeamMembers/styles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const mockedTeamMembers = [
    {
        id: 1,
        name: "Alice Johnson",
        role: "Developer",
        email: "alice.johnson@example.com",
        imageUrl: "/assets/memberImage.png"
    },
    {
        id: 2,
        name: "Bob Smith",
        role: "Designer",
        email: "bob.smith@example.com",
        backgroundColor: "blue"
    },
    {
        id: 3,
        name: "Charlie Brown",
        role: "Product Manager",
        email: "charlie.brown@example.com",
        backgroundColor: "yellow"
    },
    {
        id: 4,
        name: "Diana Prince",
        role: "QA Engineer",
        email: "diana.prince@example.com",
        backgroundColor: "purple"
    },
    {
        id: 5,
        name: "Ethan Hunt",
        role: "DevOps Engineer",
        email: "ethan.hunt@example.com",
        backgroundColor: "green"
    },
    {
        id: 6,
        name: "Fiona Gallagher",
        role: "Scrum Master",
        email: "fiona.gallagher@example.com",
        backgroundColor: "yellow"
    },
    {
        id: 7,
        name: "George Lucas",
        role: "Backend Developer",
        email: "george.lucas@example.com",
        backgroundColor: "purple"
    },
    {
        id: 8,
        name: "Hannah Montana",
        role: "Frontend Developer",
        email: "hannah.montana@example.com",
        backgroundColor: "blue"
    },
    {
        id: 9,
        name: "Fiona Gallagher",
        role: "Scrum Master",
        email: "fiona.gallagher@example.com",
        backgroundColor: "pink"
    },
    {
        id: 10,
        name: "George Lucas",
        role: "Backend Developer",
        email: "george.lucas@example.com",
        backgroundColor: "blue"
    },
    {
        id: 11,
        name: "Hannah Montana",
        role: "Frontend Developer",
        email: "hannah.montana@example.com",
        backgroundColor: "green"
    },
    {
        id: 12,
        name: "Hannah Montana",
        role: "Frontend Developer",
        email: "hannah.montana@example.com",
        backgroundColor: "yellow"
    }
];
const SLIDER_SETTINGS = {
    dots: false,
    arrows: false,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$TeamMembers$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
};
const TeamMembers = ()=>{
    _s();
    const teamMemberRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeMember, setActiveMember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const selectedUser = mockedTeamMembers.find((member)=>member.id === activeMember);
    const handleActiveMember = (id)=>{
        if (id) {
            setActiveMember(id);
        }
    };
    const renderTeamMemberItems = ()=>{
        return mockedTeamMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$atoms$2f$TeamMemberItem$2f$TeamMemberItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamMemberItem"], {
                    ref: teamMemberRef,
                    onClick: ()=>handleActiveMember(member.id),
                    backgroundColor: member.backgroundColor || "blue",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$TeamMembers$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderItem
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, member.id, false, {
                fileName: "[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$TeamMembers$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamMembersContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$TeamMembers$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamMembersList,
                children: renderTeamMemberItems()
            }, void 0, false, {
                fileName: "[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$organisms$2f$TeamMembers$2f$styles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamMembersSlider,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...SLIDER_SETTINGS,
                    children: renderTeamMemberItems()
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            selectedUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$molecules$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TeamMemberCard"], {
                imageUrl: selectedUser?.imageUrl || "/assets/memberImage.png",
                name: selectedUser?.name,
                position: selectedUser?.role,
                email: selectedUser?.email,
                ...selectedUser?.backgroundColor && {
                    backgroundVariant: selectedUser?.backgroundColor
                }
            }, selectedUser.id, false, {
                fileName: "[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/organisms/TeamMembers/TeamMembers.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
};
_s(TeamMembers, "7p2O/nf9lLGT9+Egk287z88gpBc=");
_c = TeamMembers;
var _c;
__turbopack_context__.k.register(_c, "TeamMembers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_dc3aa759._.js.map