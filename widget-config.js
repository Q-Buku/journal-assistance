/* widget-config.js */
(function() {
    // 1. Define the encoded ID (Your specific Elfsight ID)
    const _id = "ZWxmc2lnaHQtYXBwLTI3ZmQxMjlmLWI0NDMtNDk3Zi1iMTI4LWFmMDhhZDRkNDZhNw=="; 
    
    // 2. Create the Widget Container FIRST (so it's ready when the script arrives)
    const w = document.createElement('div');
    w.className = atob(_id); // Decodes to your readable ID
    w.setAttribute('data-elfsight-app-lazy', '');
    
    // Apply "Stealth Mode" - Hidden from view
    Object.assign(w.style, {
        display: "none",
        visibility: "hidden",
        position: "absolute",
        zIndex: "-9999",
        width: "0",
        height: "0"
    });

    document.body.appendChild(w);

    // 3. Inject the Script LAST
    const s = document.createElement('script');
    s.src = "https://elfsightcdn.com/platform.js";
    s.async = true;
    document.head.appendChild(s);
})();