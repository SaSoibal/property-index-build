import { useEffect } from "react";

const FacebookChat = () => {
    useEffect(() => {
        // Inject the Facebook SDK script when the component mounts
        const fbScript = document.createElement("script");
        fbScript.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fbScript.async = true;
        fbScript.defer = true;
        document.body.appendChild(fbScript);

        // Initialize the Facebook SDK once it's loaded
        window.fbAsyncInit = function() {
            window.FB.init({
                xfbml: true,
                version: "v11.0",
            });
        };

        // Cleanup script when the component unmounts
        return () => {
            document.body.removeChild(fbScript);
        };
    }, []);

    return (
        <>
            <div id="fb-root"></div>
            <div
                className="fb-customerchat"
                attribution="page_inbox"
                page_id="306739029197887"  // Replace with your page ID
                theme_color="#0084ff"
                logged_in_greeting="Hi! How can we help you?"
                logged_out_greeting="Hi! Please log into Facebook to chat with us."
            ></div>
        </>
    );
};

export default FacebookChat;
