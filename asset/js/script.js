let i = 3;
let left = 0;

$(document).ready(() => {
    /*==========================================
    * JAVASCRIPT FOR
    * LANDING PAGE SECTION
    ==========================================*/
    let ArrowLeft = document.querySelector("#btn-arrow-left");
    let ArrowRight = document.querySelector("#btn-arrow-right");
    let warna = ["#d3d3d3", "#e9686a", "#245a98", "#6144ab", "#acacac"];
    let warna_bg = ["rgba(73, 73, 73, 0.3)", "rgba(84,0,1,0.3)", "rgba(3,6,60,0.3)", "rgba(21, 0, 76, 0.3)", "rgba(73, 73, 73, 0.3)"];
    let video_bg = document.getElementById("video_background")

    window.onload = () => {
        document.getElementById("img3").classList.add("active");
        video_bg.play();

        if (ArrowLeft && ArrowRight) {
            ArrowRight.addEventListener("click", () => {
                if (i < 5) {
                    document.getElementById(`img${i}`).classList.remove("active");
                    i++;
                    document.getElementById(`img${i}`).classList.add("active");
                    left -= 27;
                    $("img.img").css("left", `${left}%`);
                    $("#wrap-video-bg").css("background-color", `${warna_bg[i - 1]}`)
                    $(".wrapper-landing-all svg path").css("fill", `${warna[i - 1]}`)
                }
            });
            ArrowLeft.addEventListener("click", () => {
                if (i > 1) {
                    document.getElementById(`img${i}`).classList.remove("active");
                    i--;
                    document.getElementById(`img${i}`).classList.add("active");
                    left += 27;
                    $("img.img").css("left", `${left}%`);
                    $("#wrap-video-bg").css("background-color", `${warna_bg[i - 1]}`)
                    $(".wrapper-landing-all svg path").css("fill", `${warna[i - 1]}`)
                }
            });
        };
    };

    /*-----------------------------------------
        * Function for Showing Vanilla TILT JS
      -----------------------------------------*/

    let tilt_show = (id_desc_detail, toogle_des_active, desciption_detail) => {
        console.log("asdasd!");
        document.getElementById(id_desc_detail).classList.toggle(toogle_des_active);
        VanillaTilt.init(document.querySelector(desciption_detail), {
            max: 25,
            speed: 400,
            glare: 1,
            "max-glare": 0.4
        });
    }

    /*===========================================
      |  * JAVASCRIPT FOR                       |
      |  * ACTIVATE/SHOW VANILLA TILT JS AT     |
      |  * RED PAGE SECTION                     |
      ==========================================*/
    let icon_des_red = document.getElementById("detail-icon-red");
    icon_des_red.addEventListener("click", () => {
        tilt_show("desc-detail-red",
            "des-active-red",
            ".description-detail-red");
    });

    /*===========================================
      |  * JAVASCRIPT FOR                       |
      |  * ACTIVATE/SHOW VANILLA TILT JS AT     |
      |  * BLUE PAGE SECTION                    |
      ==========================================*/
    let icon_des_blue = document.getElementById("detail-icon-blue");
    icon_des_blue.addEventListener("click", () => {
        tilt_show("desc-detail-blue",
            "des-active-blue",
            ".description-detail-blue");
    });
    /*===========================================
      |  * JAVASCRIPT FOR                       |
      |  * ACTIVATE/SHOW VANILLA TILT JS AT     |
      |  * GRAY PAGE SECTION                    |
      ==========================================*/
    let icon_des_gray = document.getElementById("detail-icon-gray");
    icon_des_gray.addEventListener("click", () => {
        tilt_show("desc-detail-gray",
            "des-active-gray",
            ".description-detail-gray");
    });

    /*==========================================
      |  * JAVASCRIPT FOR                       |
      |  * ACTIVATE/SHOW VANILLA TILT JS AT     |
      |  * PURPLE PAGE SECTION                  |
      ==========================================*/
    let icon_des_purple = document.getElementById("detail-icon-purple");
    icon_des_purple.addEventListener("click", () => {
        tilt_show("desc-detail-purple",
            "des-active-purple",
            ".description-detail-purple");
    });


    /*==========================================
        * JAVASCRIPT FOR
        * HAMBURGER MENU AT
        * PUPRLE PAGE SECTION
      ==========================================*/
    let hamburger = document.getElementById("hamburger-click");

    hamburger.addEventListener("click", () => {
        document.getElementById("hamburger1-change").classList.toggle("hamburger1");
        document.getElementById("hamburger2-change").classList.toggle("hamburger2");;
        if ($(".hamburger-menu div").css("position") === "relative") {
            $(".hamburger-menu div").css("position", "absolute");
        } else {
            $(".hamburger-menu div").css("position", "relative");
        }
        document.getElementById("another-toogle").classList.toggle("another-offer-active");;
    });
});

let redirect_function = (home_pos, top_first, left_first, height_first, opacity_first,
    obj_pos, top_second, left_second, height_second, opacity_second) => {
    $(`.wrapper-${home_pos}-all`).css({
        "top": `${top_first}`,
        "left": `${left_first}`,
        "height": `${height_first}`,
        "opacity": `${opacity_first}`
    });
    $(`.wrapper-${obj_pos}-all`).css({
        "top": `${top_second}`,
        "left": `${left_second}`,
        "height": `${height_second}`,
        "opacity": `${opacity_second}`
    });
};

// LANDING PAGE REDIRECT FUNCTION
let see_detail = () => {
    // GRAY
    if (i === 1) {
        open_info();
    }
    // RED
    else if (i === 2) {
        redirect_function(
            "landing", "0", "100%", "0%", "0",
            "red", "0", "0%", "100%", "1"
        );
    }
    // BLUE
    else if (i === 3) {
        redirect_function(
            "landing", "0", "-100%", "0%", "0",
            "blue", "0", "0%", "100vh", "1"
        );
    }
    // PURPLE
    else if (i === 4) {
        redirect_function(
            "landing", "-100%", "0", "0%", "0",
            "purple", "0%", "0", "100%", "1"
        );
    }
    // GRAY
    else if (i === 5) {
        redirect_function(
            "landing", "100%", "0", "0%", "0",
            "gray", "0%", "0", "100%", "1"
        );
    }
}

// BLUE PAGE REDIRECT FUNCTION
let back_home_blue = () => {
    redirect_function(
        "landing", "0%", "0%", "100%", "1",
        "blue", "0", "100%", "0", "0"
    );
}
let blue_to_red = () => {
    redirect_function(
        "red", "0", "0%", "100%", "1",
        "blue", "0", "100%", "0", "0"
    );
}
let blue_to_gray = () => {
    redirect_function(
        "gray", "0%", "0", "100%", "1",
        "blue", "0", "100%", "0", "0"
    );
}
let blue_to_purple = () => {
    redirect_function(
        "purple", "0%", "0", "100%", "1",
        "blue", "0", "100%", "0", "0"
    );
}

// RED PAGE REDIRECT FUNCTION
let back_home_red = () => {
    redirect_function(
        "landing", "0%", "0%", "100%", "1",
        "red", "0", "-100%", "0%", "0"
    );
}
let red_to_blue = () => {
    redirect_function(
        "blue", "0", "0%", "100%", "1",
        "red", "0", "-100%", "0", "0"
    );
}
let red_to_gray = () => {
    redirect_function(
        "gray", "0", "0%", "100%", "1",
        "red", "0", "-100%", "0", "0"
    );
}
let red_to_purple = () => {
    redirect_function(
        "purple", "0", "0%", "100%", "1",
        "red", "0", "-100%", "0", "0"
    );
}

// PURPLE PAGE REDIRECT FUNCTION
let back_home_purple = () => {
    redirect_function(
        "landing", "0%", "0%", "100%", "1",
        "purple", "100%", "0%", "0%", "0"
    );
}
let purple_to_blue = () => {
    redirect_function(
        "purple", "-100%", "0", "0%", "0",
        "blue", "0", "0%", "100vh", "1"
    );
}
let purple_to_red = () => {
    redirect_function(
        "purple", "-100%", "0", "0%", "0",
        "red", "0", "0%", "100%", "1"
    );
}
let purple_to_gray = () => {
    redirect_function(
        "purple", "-100%", "0", "0%", "0",
        "gray", "0", "0%", "100%", "1"
    );
}

// GRAY PAGE REDIRECT FUNCTION
let back_home_gray = () => {
    redirect_function(
        "landing", "0%", "0%", "100%", "1",
        "gray", "-100%", "0%", "0%", "0"
    );
}
let gray_to_blue = () => {
    redirect_function(
        "gray", "-100%", "0", "0%", "0",
        "blue", "0", "0%", "100vh", "1"
    );
}
let gray_to_red = () => {
    redirect_function(
        "gray", "-100%", "0", "0%", "0",
        "red", "0", "0%", "100%", "1"
    );
}
let gray_to_purple = () => {
    redirect_function(
        "gray", "-100%", "0", "0%", "0",
        "purple", "0", "0%", "100%", "1"
    );
}

let close_info = () => {
    $(".wrapper-unavailable").css({
        "transform": "scaleY(0)",
        "opacity": "0"
    });
}
let open_info = () => {
    $(".wrapper-unavailable").css({
        "transform": "scaleY(1)",
        "opacity": "1"
    });
}

