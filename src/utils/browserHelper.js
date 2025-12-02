export const detectDeviceClient = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|tablet/.test(ua)) return "mobile";
    if (window.innerWidth < 768) return "mobile";
    if (window.innerWidth < 1024) return "tablet";
    return "desktop";
};


export const detectDeviceServer = async (headers) => {
    const headerStore = await headers();
    const ua = headerStore.get("user-agent") || "";
    const isMobile = /mobile|android|iphone|ipad|tablet/i.test(ua);
    return isMobile;
};

export const getCookie = (name) => {
    if (typeof document === 'undefined') return null;
    const cookieArr = document.cookie.split(';');
    for (let cookie of cookieArr) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
};


export const parseJwt = (token) => {
    try {
        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(jsonPayload);
    } catch (err) {
        console.error("Error While Parsing JWT", err)
    }
}

export const getUserData = () => {
    const fyersCookie = getCookie("_FYERS");
    if (fyersCookie) {
        const parsedCookie = parseJwt(fyersCookie);
        if (parsedCookie.fy_id && parsedCookie.exp > new Date().getTime() / 1000) {
            return { userLoggedIn: true, userName: parsedCookie.display_name, userId: parsedCookie.fy_id };
        } else {
            return { userLoggedIn: false, userName: "", userId: "" };
        }
    } else {
        return { userLoggedIn: false, userName: "", userId: "" };
    }
}


const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.fyers.in; secure; samesite=Lax`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=Lax`;
};

export const logoutUser = () => {
    deleteCookie("_FYERS");
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
};
