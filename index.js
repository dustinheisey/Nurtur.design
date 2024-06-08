const storageKey = "theme-preference";
const theme = {
    value: getColorPreference(),
};

function getColorPreference() {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey);
    else {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    }
}

function setPreference() {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
}

function reflectPreference() {
    document.firstElementChild.setAttribute("data-theme", theme.value);
    document
        .querySelector("#theme-toggle")
        ?.setAttribute("aria-label", theme.value);
}

function onClick() {
    theme.value = theme.value === "light" ? "dark" : "light";
    setPreference();
}

function darkMode() {
    reflectPreference();

    window.onload = () => {
        // set on load so screen readers can get the latest value on the button
        reflectPreference();

        // now this script can find and listen for clicks on the control
        document
            .querySelector("#theme-toggle")
            .addEventListener("click", onClick);
    };

    document.addEventListener("keyup", (e) => {
        if (e.key === "\\") {
            onClick();
        }
    });

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", ({ matches: isDark }) => {
            theme.value = isDark ? "dark" : "light";
            setPreference();
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector("#theme-toggle");
    if (darkModeToggle) darkMode();
});

function range() {
    const budgetInput = document.getElementById("budget");
    const budgetValue = document.getElementById("budget-value");

    if (budgetInput) {
        budgetInput.addEventListener("input", function () {
            budgetValue.textContent = "$" + budgetInput.value;
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const range = document.getElementById("budget");
    if (range) range();
});

function readingProgress() {
    if (window.ResizeObserver) {
        const progress = document.getElementById("reading-progress");

        let timeOfLastScroll = 0;
        let requestedAniFrame = false;
        function scroll() {
            if (!requestedAniFrame) {
                requestAnimationFrame(updateProgress);
                requestedAniFrame = true;
            }
            timeOfLastScroll = Date.now();
        }
        addEventListener("scroll", scroll);

        let winHeight = 1000;
        let bottom = 10000;
        function updateProgress() {
            requestedAniFrame = false;
            const percent = Math.min(
                (document.scrollingElement.scrollTop / (bottom - winHeight)) *
                    100,
                100
            );
            if (progress) {
                progress.style.transform = `translate(-${100 - percent}vw, 0)`;
            }
            if (Date.now() - timeOfLastScroll < 3000) {
                requestAnimationFrame(updateProgress);
                requestedAniFrame = true;
            }
        }

        new ResizeObserver(() => {
            bottom =
                document.scrollingElement.scrollTop +
                document
                    .querySelector("#comments,footer")
                    .getBoundingClientRect().top;
            winHeight = window.innerHeight;
            scroll();
        }).observe(document.body);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const progress = document.getElementById("reading-progress");
    if (progress) readingProgress();
});

function scrollingNav() {
    const navbar = document.querySelector("#navbar");
    const top = navbar.offsetTop;
    function floating() {
        if (window.scrollY > top) {
            navbar.classList.add("floating");
        } else {
            navbar.classList.remove("floating");
        }
    }
    window.addEventListener("scroll", floating);
}

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("#navbar");
    if (navbar) scrollingNav();
});
