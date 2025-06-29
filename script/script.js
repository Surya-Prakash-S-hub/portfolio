import React, { useEffect, useRef } from 'react';

const App = () => {
    const picBoxRef = useRef(null);
    const navBarRef = useRef(null);
    const homeRef = useRef(null);
    const linksRef = useRef([]);
    const menuBarRef = useRef(null);
    const menuRef = useRef(null);
    const containerRef = useRef(null);

    // Creating circles on mount
    useEffect(() => {
        if (picBoxRef.current) {
            for (let i = 0; i < 3; i++) {
                const circle = document.createElement('div');
                circle.classList.add(`circle-${i}`);
                circle.classList.add('cDesign');
                picBoxRef.current.appendChild(circle);
            }
        }
        // Landing animation
        if (containerRef.current) {
            containerRef.current.classList.add('O-O');
        }
    }, []);

    // Scroll events
    useEffect(() => {
        const fixedStatement = () => {
            if (navBarRef.current) {
                if (window.scrollY > 10) {
                    navBarRef.current.classList.add('active-nav');
                } else {
                    navBarRef.current.classList.remove('active-nav');
                }
            }
        };
        const slideStatement = () => {
            if (homeRef.current) {
                if (window.scrollY > 150) {
                    homeRef.current.classList.add('fixed-screen');
                } else {
                    homeRef.current.classList.remove('fixed-screen');
                }
            }
        };
        const onScroll = () => {
            fixedStatement();
            slideStatement();
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Link active state
    useEffect(() => {
        linksRef.current.forEach((link, idx) => {
            link.onclick = () => {
                linksRef.current.forEach(l => l.classList.remove('active-link'));
                link.classList.add('active-link');
            };
        });
    }, []);

    // Menu bar click
    useEffect(() => {
        if (menuBarRef.current && menuRef.current) {
            menuBarRef.current.onclick = () => {
                menuRef.current.classList.toggle('showMenu');
            };
        }
    }, []);

    return (
        <div>
            <nav ref={navBarRef}>
                <div className="bar" ref={menuBarRef}>Menu</div>
                <div className="links">
                    {['Home', 'About', 'Contact'].map((text, idx) => (
                        <a
                            href={`#${text.toLowerCase()}`}
                            key={text}
                            ref={el => linksRef.current[idx] = el}
                        >
                            {text}
                        </a>
                    ))}
                </div>
                <div className="secondlink">
                    <div className="sd-link" ref={menuRef}>Menu Content</div>
                </div>
            </nav>
            <section id="home" ref={homeRef}>
                <div className="container-fluid" ref={containerRef}>
                    <div className="picture" ref={picBoxRef}></div>
                </div>
            </section>
        </div>
    );
};

export default App;