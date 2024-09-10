/* 
 * Author: Tarık Aydın - github.com/trkaydn
 * CreateDate: 08.08.2024
 * Description: Responsive Bottom Sheet Modal Structure. 
 */
document.addEventListener("DOMContentLoaded", function () {

    const showModalBtns = document.querySelectorAll(".show-modal");

    showModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const bottomSheet = document.querySelector(targetId);
            const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
            const sheetContent = bottomSheet.querySelector(".content");
            const dragIcon = bottomSheet.querySelector(".drag-icon");

            let isDragging = false, startY, startHeight;

            const showBottomSheet = () => {
                bottomSheet.classList.add("show");
                document.body.style.overflowY = "hidden";
                startHeight = pxToVh(sheetContent.scrollHeight);
                updateSheetHeight(startHeight);
            }

            const updateSheetHeight = (height) => {
                sheetContent.style.height = `${height}dvh`;
                bottomSheet.classList.toggle("fullscreen", height === 100);
            }

            const hideBottomSheet = () => {
                bottomSheet.classList.remove("show");
                document.body.style.overflowY = "auto";
                sheetContent.removeAttribute('style');
            }

            const dragStart = (e) => {
                isDragging = true;
                startY = e.pageY || (e.touches && e.touches[0] && e.touches[0].pageY);
                bottomSheet.classList.add("dragging");
                disableScroll();
            }

            const dragging = (e) => {
                if (!isDragging) return;
                const delta = startY - (e.pageY || (e.touches && e.touches[0] && e.touches[0].pageY));
                const newHeight = startHeight + delta / window.innerHeight * 100;
                if (newHeight < startHeight) {
                    e.preventDefault();
                    updateSheetHeight(newHeight);
                }
            }

            const dragStop = () => {
                isDragging = false;
                if (bottomSheet.classList.contains("dragging")) {
                    bottomSheet.classList.remove("dragging");
                    const sheetHeight = pxToVh(sheetContent.scrollHeight);
                    if (sheetHeight <= startHeight / 1.01) { hideBottomSheet(); }
                    enableScroll();
                }
            }

            dragIcon.addEventListener("mousedown", dragStart);
            document.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", dragStop);

            dragIcon.addEventListener("touchstart", dragStart);
            document.addEventListener("touchmove", dragging, { passive: false });
            document.addEventListener("touchend", dragStop);

            sheetOverlay.addEventListener("click", hideBottomSheet);
            showBottomSheet();
        });
    });
});

 function pxToVh(px) {
     const vh = window.innerHeight * 0.01;
     return parseInt(px / vh);
 }

const disableScroll = () => {
    document.addEventListener('touchmove', preventDefault, { passive: false });
    document.addEventListener('mousemove', preventDefault, { passive: false });
};

const enableScroll = () => {
    document.removeEventListener('touchmove', preventDefault);
    document.removeEventListener('mousemove', preventDefault);
};

const preventDefault = (e) => {
    e.preventDefault();
};