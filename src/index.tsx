if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

const UI = import("./ui/LiveSplit");
const ReactImport = import("react");
const ReactDOMImport = import("react-dom");
const Toastify = import("react-toastify");

import "./css/font-awesome.css";
import "./css/main.scss";

async function run() {
    const { LiveSplit } = await UI;
    const React = await ReactImport;
    const ReactDOM = await ReactDOMImport;
    const { toast, ToastContainer } = await Toastify;

    const {
        splits,
        splitsKey,
        layout,
        hotkeys,
        layoutWidth,
    } = await LiveSplit.loadStoredData();

    try {
        ReactDOM.render(
            <div>
                <LiveSplit
                    splits={splits}
                    layout={layout}
                    hotkeys={hotkeys}
                    splitsKey={splitsKey}
                    layoutWidth={layoutWidth}
                />
                <ToastContainer
                    position={toast.POSITION.BOTTOM_RIGHT}
                    toastClassName="toast-class"
                    bodyClassName="toast-body"
                    style={{
                        textShadow: "none",
                    }}
                />
            </div>,
            document.getElementById("base"),
        );
    } catch (_) {
        alert(`Couldn't load LiveSplit One. \
You may be using a browser that doesn't support WebAssembly. \
Alternatively, you may be using an Adblocker like uBlock Origin. \
Those are known to block WebAssembly.`);
    }
}

run();
