// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-brown; icon-glyph: magic;
// ==========================================
// AimLock Head V1 - SCRIPTABLE UI DEMO
// Password: VanhAimmV1
// Chỉ mô phỏng giao diện.
// ==========================================

const PASSWORD = "VanhAimmV1";
const web = new WebView();

const html = `
<!DOCTYPE html>
<html lang="vi">
<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width,
initial-scale=1.0,
maximum-scale=1.0,
user-scalable=no">

<style>

* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    margin: 0;
    padding: 18px 13px 35px;
    min-height: 100vh;

    color: white;

    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    background:
        radial-gradient(
            circle at 50% 0%,
            #42116b 0%,
            transparent 30%
        ),
        radial-gradient(
            circle at 0% 70%,
            #172b70 0%,
            transparent 35%
        ),
        #070610;
}

.box {
    width: 100%;
    max-width: 650px;
    margin: auto;
}


/* =================================
   LOGIN
================================= */

.login {
    padding: 27px 19px;

    text-align: center;

    border-radius: 29px;

    border: 1px solid #9c3cff;

    background:
        linear-gradient(
            145deg,
            rgba(29,13,48,.97),
            rgba(9,8,17,.98)
        );

    box-shadow:
        0 0 35px rgba(160,50,255,.25);
}

.crosshair {
    width: 105px;
    height: 105px;

    margin: 0 auto 17px;

    position: relative;

    border: 4px solid #c65cff;

    border-radius: 50%;

    box-shadow:
        0 0 18px #a83fff,
        inset 0 0 18px rgba(200,70,255,.25);
}

.crosshair:before {
    content: "";

    position: absolute;

    width: 4px;
    height: 125px;

    left: 50%;
    top: -14px;

    background:
        linear-gradient(
            #ff62e8,
            #8d5bff
        );

    box-shadow:
        0 0 12px #cf4cff;
}

.crosshair:after {
    content: "";

    position: absolute;

    width: 125px;
    height: 4px;

    left: -14px;
    top: 50%;

    background:
        linear-gradient(
            90deg,
            #8d5bff,
            #ff62e8
        );

    box-shadow:
        0 0 12px #cf4cff;
}

.cross-dot {
    position: absolute;

    width: 17px;
    height: 17px;

    left: 50%;
    top: 50%;

    transform: translate(-50%,-50%);

    background: white;

    border-radius: 50%;

    box-shadow:
        0 0 17px white;

    z-index: 2;
}

.logo {
    font-size: 34px;
    font-weight: 900;

    background:
        linear-gradient(
            90deg,
            #ffffff,
            #bf7cff,
            #ff52d9,
            #6c7cff
        );

    -webkit-background-clip: text;
    color: transparent;

    text-shadow:
        0 0 18px rgba(190,70,255,.2);
}

.subtitle {
    margin-top: 7px;
    margin-bottom: 25px;

    color: #aaa3b5;

    font-size: 13px;

    letter-spacing: 2px;
}

.password {
    width: 100%;

    height: 58px;

    padding: 0 17px;

    border-radius: 18px;

    border: 1px solid #7630b6;

    outline: none;

    background: #08070e;

    color: white;

    font-size: 17px;

    text-align: center;
}

.password:focus {
    border-color: #d24cff;

    box-shadow:
        0 0 18px
        rgba(200,60,255,.25);
}

.login-btn {
    width: 100%;

    height: 58px;

    margin-top: 15px;

    border: 0;

    border-radius: 18px;

    color: white;

    font-size: 18px;

    font-weight: 900;

    background:
        linear-gradient(
            90deg,
            #7b3fee,
            #d73fd1,
            #ef4ca8
        );

    box-shadow:
        0 8px 25px
        rgba(180,50,255,.25);
}

.error {
    display: none;

    margin-top: 12px;

    color: #ff5b82;

    font-size: 13px;

    font-weight: 700;
}


/* =================================
   MENU
================================= */

#menu {
    display: none;
}

.menu {
    padding: 17px;

    border-radius: 28px;

    border: 1px solid #8838d5;

    background:
        linear-gradient(
            145deg,
            rgba(25,15,39,.98),
            rgba(8,7,15,.98)
        );

    box-shadow:
        0 0 40px
        rgba(130,40,220,.22);
}


/* HEADER */

.header {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;
}

.header-left {
    display: flex;

    align-items: center;

    gap: 11px;
}

.mini-target {
    width: 58px;
    height: 58px;

    position: relative;

    border: 3px solid #b84dff;

    border-radius: 50%;

    box-shadow:
        0 0 17px
        rgba(190,60,255,.55);
}

.mini-target:before {
    content: "";

    position: absolute;

    width: 3px;
    height: 68px;

    left: 50%;
    top: -8px;

    background: #df65ff;
}

.mini-target:after {
    content: "";

    position: absolute;

    width: 68px;
    height: 3px;

    left: -8px;
    top: 50%;

    background: #df65ff;
}

.header-title {
    font-size: 21px;

    font-weight: 900;

    background:
        linear-gradient(
            90deg,
            #fff,
            #bd7dff,
            #f15cd7
        );

    -webkit-background-clip: text;
    color: transparent;
}

.status {
    margin-top: 4px;

    color: #aaa3b2;

    font-size: 11px;
}

.status-dot {
    display: inline-block;

    width: 8px;
    height: 8px;

    margin-right: 5px;

    border-radius: 50%;

    background: #27e99b;

    box-shadow:
        0 0 9px #27e99b;
}

.admin {
    padding: 8px 11px;

    border-radius: 15px;

    border: 1px solid #8738cf;

    color: #d29aff;

    font-size: 12px;
}


/* AIM STATUS */

.aim-status {
    margin: 15px 0;

    padding: 14px;

    border-radius: 19px;

    display: flex;

    align-items: center;

    gap: 12px;

    background:
        linear-gradient(
            90deg,
            rgba(116,42,190,.18),
            rgba(24,53,150,.12)
        );

    border:
        1px solid
        rgba(150,65,230,.3);
}

.target-icon {
    width: 48px;
    height: 48px;

    border-radius: 50%;

    border: 3px solid #c457ff;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 20px;

    box-shadow:
        0 0 16px
        rgba(190,60,255,.4);
}

.aim-text {
    flex: 1;
}

.aim-title {
    font-size: 16px;
    font-weight: 850;
}

.aim-desc {
    margin-top: 3px;

    color: #9991a7;

    font-size: 11px;
}

.ready {
    padding: 6px 9px;

    border-radius: 10px;

    color: #35e7a3;

    background:
        rgba(30,210,145,.09);

    border:
        1px solid
        rgba(30,210,145,.25);

    font-size: 10px;

    font-weight: 800;
}


/* FUNCTION CARD */

.card {
    min-height: 75px;

    margin: 8px 0;

    padding: 11px;

    display: flex;

    align-items: center;

    gap: 11px;

    border-radius: 19px;

    border: 1px solid #292136;

    background:
        linear-gradient(
            100deg,
            #1b1425,
            #11101a
        );
}

.card-icon {
    width: 49px;
    height: 49px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 14px;

    border:
        1px solid
        #923ed8;

    color: #d263ff;

    font-size: 22px;

    background:
        rgba(150,50,230,.08);

    box-shadow:
        inset 0 0 13px
        rgba(160,50,255,.08);
}

.card-text {
    flex: 1;
}

.card-name {
    font-size: 16px;

    font-weight: 850;
}

.card-desc {
    margin-top: 4px;

    color: #9992a5;

    font-size: 11px;
}


/* SWITCH */

.switch {
    width: 59px;
    height: 34px;

    padding: 3px;

    flex-shrink: 0;

    border-radius: 30px;

    background:
        linear-gradient(
            90deg,
            #8536dd,
            #d640d0
        );

    box-shadow:
        0 0 12px
        rgba(190,50,255,.22);
}

.switch.off {
    background: #3b3445;

    box-shadow: none;
}

.knob {
    width: 28px;
    height: 28px;

    border-radius: 50%;

    background: white;

    transition: .2s;

    box-shadow:
        0 2px 8px
        rgba(0,0,0,.35);
}

.switch.on .knob {
    transform: translateX(25px);
}


/* ACTIVATE */

.activate {
    width: 100%;

    height: 58px;

    margin-top: 15px;

    border: 0;

    border-radius: 19px;

    color: white;

    font-size: 18px;

    font-weight: 900;

    background:
        linear-gradient(
            90deg,
            #16c99a,
            #15aa91,
            #13a582
        );

    box-shadow:
        0 8px 22px
        rgba(20,200,150,.16);
}


/* CONSOLE */

.console {
    margin-top: 14px;

    min-height: 48px;

    padding: 14px;

    border-radius: 16px;

    border:
        1px solid
        rgba(38,188,202,.38);

    background: #06070d;

    color: #56ddd4;

    font-family: monospace;

    font-size: 11px;

    line-height: 1.5;
}


/* TOAST */

#toast {
    position: fixed;

    left: 50%;

    bottom: 28px;

    transform:
        translate(-50%, 120px);

    width: calc(100% - 35px);

    max-width: 500px;

    padding: 15px;

    border-radius: 17px;

    text-align: center;

    background:
        linear-gradient(
            90deg,
            #16b987,
            #159f86
        );

    color: white;

    font-weight: 850;

    box-shadow:
        0 10px 30px
        rgba(0,0,0,.4);

    transition: .3s;

    z-index: 100;
}

#toast.show {
    transform:
        translate(-50%, 0);
}


/* MOBILE */

@media(max-width:430px) {

    .logo {
        font-size: 28px;
    }

    .header-title {
        font-size: 18px;
    }

    .admin {
        font-size: 10px;
    }

    .card-name {
        font-size: 15px;
    }

    .card-desc {
        font-size: 10px;
    }

}

</style>
</head>


<body>

<div class="box">


<!-- ================= LOGIN ================= -->

<div id="login" class="login">

    <div class="crosshair">
        <div class="cross-dot"></div>
    </div>

    <div class="logo">
        AimLock Head V1
    </div>

    <div class="subtitle">
        AIM SYSTEM • SECURE ACCESS
    </div>

    <input
        id="password"
        class="password"
        type="password"
        placeholder="Nhập mật khẩu"
        autocomplete="off"
    >

    <button
        class="login-btn"
        onclick="login()"
    >
        ĐĂNG NHẬP
    </button>

    <div id="error" class="error">
        ❌ Mật khẩu không chính xác
    </div>

</div>


<!-- ================= MENU ================= -->

<div id="menu">

<div class="menu">


    <!-- HEADER -->

    <div class="header">

        <div class="header-left">

            <div class="mini-target"></div>

            <div>

                <div class="header-title">
                    AimLock Head V1
                </div>

                <div class="status">
                    <span class="status-dot"></span>
                    System Status: Connected
                </div>

            </div>

        </div>

        <div class="admin">
            ● Admin
        </div>

    </div>


    <!-- AIM STATUS -->

    <div class="aim-status">

        <div class="target-icon">
            ⊙
        </div>

        <div class="aim-text">

            <div class="aim-title">
                AIM HEAD SYSTEM
            </div>

            <div class="aim-desc">
                AimLock Head V1 • UI Demo
            </div>

        </div>

        <div class="ready">
            READY
        </div>

    </div>


    <!-- AIMLOCK -->

    <div class="card">

        <div class="card-icon">
            🎯
        </div>

        <div class="card-text">

            <div class="card-name">
                AimLock V1
            </div>

            <div class="card-desc">
                Mô phỏng khóa tâm
            </div>

        </div>

        <div
            class="switch"
            onclick="toggle(this,'AimLock V1')"
        >
            <div class="knob"></div>
        </div>

    </div>


    <!-- AIM DRAG -->

    <div class="card">

        <div class="card-icon">
            ↗
        </div>

        <div class="card-text">

            <div class="card-name">
                Aim Drag V1
            </div>

            <div class="card-desc">
                Mô phỏng kéo tâm
            </div>

        </div>

        <div
            class="switch"
            onclick="toggle(this,'Aim Drag V1')"
        >
            <div class="knob"></div>
        </div>

    </div>


    <!-- FIX LỐ -->

    <div class="card">

        <div class="card-icon">
            ⌖
        </div>

        <div class="card-text">

            <div class="card-name">
                Fix Lố Đầu V1
            </div>

            <div class="card-desc">
                Mô phỏng ổn định hướng ngắm
            </div>

        </div>

        <div
            class="switch"
            onclick="toggle(this,'Fix Lố Đầu V1')"
        >
            <div class="knob"></div>
        </div>

    </div>


    <!-- GHÌM TÂM -->

    <div class="card">

        <div class="card-icon">
            ◎
        </div>

        <div class="card-text">

            <div class="card-name">
                Ghìm Tâm Đầu V1
            </div>

            <div class="card-desc">
                Mô phỏng giữ tâm
            </div>

        </div>

        <div
            class="switch"
            onclick="toggle(this,'Ghìm Tâm Đầu V1')"
        >
            <div class="knob"></div>
        </div>

    </div>


    <!-- ACTIVATE -->

    <button
        class="activate"
        onclick="activateMenu()"
    >
        KÍCH HOẠT MENU
    </button>


    <!-- CONSOLE -->

    <div id="console" class="console">
        &gt; SYSTEM: Ready!<br>
        &gt; Waiting for module...
    </div>


</div>

</div>

</div>


<!-- TOAST -->

<div id="toast">
    ✓ Đã cài thành công
</div>


<script>


/* ================= LOGIN ================= */

function login() {

    var password =
        document.getElementById("password").value;

    var error =
        document.getElementById("error");

    if (password === "VanhAimmV1") {

        document.getElementById("login")
            .style.display = "none";

        document.getElementById("menu")
            .style.display = "block";

    } else {

        error.style.display = "block";

        document.getElementById("password")
            .value = "";

        setTimeout(function() {
            error.style.display = "none";
        }, 1800);
    }
}


/* ENTER */

document
.getElementById("password")
.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            login();
        }

    }
);


/* ================= TOGGLE ================= */

function toggle(element, name) {

    var consoleBox =
        document.getElementById("console");

    var toast =
        document.getElementById("toast");


    if (element.classList.contains("on")) {

        element.classList.remove("on");
        element.classList.add("off");

        consoleBox.innerHTML =
            "&gt; " + name + ": Disabled";

        toast.innerHTML =
            "○ " + name + " đã tắt";

    } else {

        element.classList.remove("off");
        element.classList.add("on");

        consoleBox.innerHTML =
            "&gt; " + name + ": Installed Successfully!";

        toast.innerHTML =
            "✓ " + name + " đã cài thành công";

    }


    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 1800);
}


/* ================= ACTIVATE ================= */

function activateMenu() {

    document.getElementById("console")
        .innerHTML =
        "&gt; SYSTEM: Activated!<br>" +
        "&gt; All selected modules are ready.";

    var toast =
        document.getElementById("toast");

    toast.innerHTML =
        "✓ AimLock Head V1 đã kích hoạt thành công";

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 2000);
}

</script>

</body>
</html>
`;

await web.loadHTML(html);
await web.present(true);