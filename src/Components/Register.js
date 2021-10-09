import React, { useRef, useEffect } from 'react';
import particlesConfig from "../particles.json";
import Particles from "react-tsparticles";

function Register() {
    const particles = useRef();

    useEffect(() => {
        matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                const newColorScheme = e.matches ? "dark" : "light";

                particles.current.loadTheme(newColorScheme);
            });
    }, []);

    return (
        <div>
            <Particles options={particlesConfig} id="tsparticles" container={particles} />
            <main className="box">
                <form>
                    <h3>Register Here</h3>

                    <label for="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" />

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password" />

                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" placeholder="Confirm Password" id="confirmPassword" />

                    <button>Log In</button>
                    <div class="social">
                        <div class="go"><i class="fab fa-google"></i> Google</div>
                        <div class="fb"><i class="fab fa-facebook"></i> Facebook</div>
                    </div>
                </form>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default Register;