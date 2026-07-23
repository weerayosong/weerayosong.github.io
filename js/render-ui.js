import { projectsData } from "../data/projects.js";
import { certsData } from "../data/certs.js";
import { miniProjectsData } from "../data/minis.js";

export function renderFeaturedProject() {
    const container = document.getElementById("featured-project-container");
    if (!container) return;

    container.innerHTML = projectsData
        .map((project) => {
            return `
            <div class="premium-card flex flex-col bg-white dark:bg-slate-900/40 border border-gray-100 dark:border-slate-800/80 rounded-2xl overflow-hidden group relative">
                
                <div class="w-full aspect-video bg-slate-900 relative cursor-pointer border-b border-gray-100 dark:border-slate-800/50" onclick="openVideoLightbox('${project.image}')">
                    <video 
                        src="${project.image}" 
                        class="w-full h-full object-fill select-none" 
                        loop 
                        muted 
                        playsinline
                        autoplay
                        oncontextmenu="return false;">
                    </video>
                </div>

                <div class="p-8 md:p-10 flex flex-col md:flex-row md:items-start justify-between gap-8 z-10">
                    
                    <div class="flex-1 space-y-4">
                        <h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">
                            ${project.title}
                        </h3>
                        <p class="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-3xl">
                            ${project.desc}
                        </p>
                    </div>

                    <div class="w-full md:w-80 shrink-0 space-y-6">
                        <div class="flex flex-wrap gap-2">
                            ${project.tags
                                .map(
                                    (tag) => `
                                <span class="px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700/50 shadow-sm">
                                    ${tag}
                                </span>
                            `,
                                )
                                .join("")}
                        </div>

                        <div class="pt-6 flex gap-6 text-sm font-medium border-t border-gray-50 dark:border-slate-800/60">
                            <a href="${project.githubLink}" target="_blank" class="text-slate-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200 flex items-center gap-2">
                                <i class="fab fa-github text-lg"></i> Code
                            </a>
                            ${
                                project.previewLink
                                    ? `
                                <a href="${project.previewLink}" target="_blank" class="text-slate-600 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200 flex items-center gap-2">
                                    <i class="fas fa-external-link-alt text-lg"></i> Preview
                                </a>
                            `
                                    : ""
                            }
                        </div>
                    </div>
                </div>

                <div class="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-slate-500/20 transition-colors duration-500"></div>

            </div>
        `;
        })
        .join("");
}

export function renderCertificates() {
    const certsContainer = document.getElementById("certs-container");
    if (!certsContainer) return;

    certsContainer.innerHTML = "";

    certsData.forEach((cert) => {
        const card = document.createElement("a");
        card.href = cert.link;
        card.target = "_blank";
        card.className =
            "relative overflow-hidden rounded-md border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 hover:border-secondary transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.5)] group cursor-pointer block h-28";
        card.innerHTML = `
            <img src="${cert.bgImage}" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-0" alt="Certificate Background">
            <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent z-0"></div>
            <div class="relative z-10 p-4 flex items-center gap-6 w-full h-full">
                <div class="rounded-md w-10 h-10 border border-slate-700 bg-slate-900/90 flex items-center justify-center shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] transform rotate-45 group-hover:border-secondary transition-colors">
                    <i class="${cert.icon} text-secondary text-2xl transform -rotate-45"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="text-base font-bold text-slate-100 leading-tight drop-shadow-md group-hover:text-white transition-colors line-clamp-2">${cert.title}</h3>
                    <p class="text-secondary text-xs font-semibold uppercase tracking-wider mt-1 drop-shadow-md truncate">${cert.issuer}</p>
                </div>
                <div class="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i class="fas fa-external-link-alt text-sm text-secondary"></i>
                </div>
            </div>
        `;
        certsContainer.appendChild(card);
    });
}

export function renderMiniProjects() {
    const desktopContainer = document.getElementById("mini-projects-desktop");
    const mobileContainer = document.getElementById("mini-projects-mobile");
    const scrollProgress = document.getElementById("mini-scroll-progress");

    if (desktopContainer) desktopContainer.innerHTML = "";
    if (mobileContainer) mobileContainer.innerHTML = "";

    miniProjectsData.forEach((project) => {
        const tagsHTML = project.tags
            .map(
                (tag) =>
                    `<span class="px-2 py-0.5 bg-slate-600/50 text-secondary text-[10px] font-semibold rounded-md uppercase tracking-wider">${tag}</span>`,
            )
            .join("");

        if (desktopContainer) {
            const desktopCard = document.createElement("div");
            desktopCard.className =
                "bg-grey-800/40 backdrop-blur-sm rounded-md border border-slate-700/50 overflow-hidden flex hover:border-secondary hover:shadow-lg transition-all duration-300 group h-40";
            desktopCard.innerHTML = `
                <div class="w-40 shrink-0 relative overflow-hidden bg-grey-800">
                    <img src="${project.image}" onclick="openLightbox('${project.image}')" class="w-full h-full aspect-square object-cover opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 cursor-pointer" alt="${project.title}">
                </div>
                <div class="p-4 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 class="text-white font-bold text-md leading-tight mb-1">${project.title}</h3>
                        <p class="text-gray-400 text-xs line-clamp-2">${project.desc}</p>
                        <div class="flex flex-wrap gap-1 mt-2">${tagsHTML}</div>
                    </div>
                    <div class="flex gap-3 mt-2 pt-2 border-t border-slate-700/50">
                        <a href="${project.githubLink}" target="_blank" class="text-xs font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                        <a href="${project.previewLink}" target="_blank" class="text-xs font-semibold text-gray-400 hover:text-secondary transition-colors flex items-center gap-1"><i class="fas fa-external-link-alt"></i> Preview</a>
                    </div>
                </div>
            `;
            desktopContainer.appendChild(desktopCard);
        }

        if (mobileContainer) {
            const mobileCard = document.createElement("div");
            mobileCard.className =
                "bg-grey-800/40 backdrop-blur-sm rounded-md border border-slate-700/50 overflow-hidden flex flex-col w-[75vw] sm:w-[50vw] shrink-0 snap-center group";
            mobileCard.innerHTML = `
                <div class="w-full relative overflow-hidden bg-grey-800 pt-[100%]">
                    <img src="${project.image}" onclick="openLightbox('${project.image}')" class="absolute inset-0 w-full h-full object-cover opacity-100 cursor-pointer" alt="${project.title}">
                </div>
                <div class="p-5 flex flex-col flex-grow">
                    <h3 class="text-white font-bold text-lg mb-2">${project.title}</h3>
                    <p class="text-gray-400 text-sm mb-4 flex-grow">${project.desc}</p>
                    <div class="flex flex-wrap gap-1.5 mb-4">${tagsHTML}</div>
                    <div class="flex gap-3 mt-2 pt-2 border-t border-slate-700/50">
                        <a href="${project.githubLink}" target="_blank" class="text-xs font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-1"><i class="fab fa-github"></i> Code</a>
                        <a href="${project.previewLink}" target="_blank" class="text-xs font-semibold text-gray-400 hover:text-secondary transition-colors flex items-center gap-1"><i class="fas fa-external-link-alt"></i> Preview</a>
                    </div>
                </div>
            `;
            mobileContainer.appendChild(mobileCard);
        }
    });

    if (mobileContainer && scrollProgress) {
        mobileContainer.addEventListener("scroll", () => {
            const maxScrollLeft =
                mobileContainer.scrollWidth - mobileContainer.clientWidth;
            if (maxScrollLeft > 0) {
                const scrollPercentage =
                    (mobileContainer.scrollLeft / maxScrollLeft) * 100;
                const baseWidth = (1 / miniProjectsData.length) * 100;
                scrollProgress.style.width = `${Math.max(baseWidth, scrollPercentage)}%`;
            }
        });
        const baseWidth = (1 / miniProjectsData.length) * 100;
        scrollProgress.style.width = `${baseWidth}%`;
    }
}
