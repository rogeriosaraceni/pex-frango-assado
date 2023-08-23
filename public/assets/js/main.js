"use strict";

/** ////////////////////////////////////////////////////////////////////
 * Main JS
 *
 * - enable tooltips Bootstrap
 * - navbarSideCollapse Bootstrap
 * -
 * - mainAppMarginTop
 * - navigationActive
 * - data-row="delete"
 *
 * - tab-datatable-scroll-x
 * - fancybox
 * - DOMPurif protect xss
 * -
 *
 * - Active Functions
 *
--------------------------------------------------------------------- */



/** --------------------------------------------------------------------
 * enable tooltips Bootstrap
--------------------------------------------------------------------- */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

/** --------------------------------------------------------------------
 * navbarSideCollapse Bootstrap
--------------------------------------------------------------------- */
(() => {
    document.querySelector("#navbarSideCollapse")?.addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open")
    })
})()


/** --------------------------------------------------------------------
 * mainAppMarginTop
--------------------------------------------------------------------- */
const mainAppMarginTop = () => {
    const header = document.querySelector('[data-el="top-fixed"]')
    const mainApp = document.querySelector('[data-el="main-app"]')

    if(header){
        const headerHeight = header.clientHeight + 'px'
        if(mainApp){
            mainApp.style.marginTop = headerHeight
        }
    }
}

/** --------------------------------------------------------------------
 * currentYear
--------------------------------------------------------------------- */
const showCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    const divCurrentYear = document.querySelectorAll('[data-js="currentYear"]')
    if (divCurrentYear) {
        divCurrentYear.forEach((item) => {
            item.textContent = currentYear
        })
    }
}

/** --------------------------------------------------------------------
 * navigationActive
--------------------------------------------------------------------- */
const navigationActive = () => {
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll(`.navbar-nav .nav-item a[href$="${currentUrl}"]`)

    navLinks.forEach(function (link) {
        link.classList.add("active")

        const dropdownParent = link.closest(".nav-item.dropdown")
        dropdownParent?.classList.add("active")
    });
}

/** --------------------------------------------------------------------
 * data-row="delete"
--------------------------------------------------------------------- */
$('[data-row="delete"]').click(function () {
    if (!confirm("Você tem certeza que deseja excluir?")) {
        return false;
    }
});

/** --------------------------------------------------------------------
 * tab-datatable-scroll-x
--------------------------------------------------------------------- */
function datatableScrollX() {
    if ($(".tab-datatable-scroll-x")) {
        $(".tab-datatable-scroll-x").DataTable({
            order: [[0, "asc"]],
            ordering: true,
            paging: true,
            info: true,
            scrollX: true,
            scrollCollapse: true,

            lengthMenu: [
                [15, 30, 50, 80, -1],
                [15, 30, 50, 80, "Tudo"],
            ],

            columnDefs: [
                {
                    targets: "no-sort",
                    orderable: false,
                },
            ],

            language: {
                url: "https://cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
            },
        });
    }
}

/** --------------------------------------------------------------------
 * fancybox
 * https://fancyapps.com/fancybox/plugins/html/#iframes
--------------------------------------------------------------------- */
Fancybox.bind("[data-fancybox]", {});

/** --------------------------------------------------------------------
 * floatThead
--------------------------------------------------------------------- */
const $table = $(".fixThead");
$table.floatThead({
    scrollContainer: function ($table) {
        return $table.closest(".table-responsive");
    },
});

/** --------------------------------------------------------------------
 * DOMPurif protect xss
--------------------------------------------------------------------- */
const sanitize = (string) => DOMPurify.sanitize(string);

let inputsApp = document.querySelectorAll(".form-control");
inputsApp.forEach((item) => {
    item.addEventListener("change", (e) => {
        const result = sanitize(e.target.value);
        console.log(result);
    });
});

/** --------------------------------------------------------------------
 * Active Functions
--------------------------------------------------------------------- */
mainAppMarginTop()
showCurrentYear()
navigationActive()
datatableScrollX()
