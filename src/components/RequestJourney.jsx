import { useEffect, useRef, useState } from "react";
import {
  FiMonitor,
  FiSend,
  FiShield,
  FiLock,
  FiDatabase,
  FiPlay,
  FiRotateCcw,
  FiCheckCircle,
  FiXCircle,
  FiAlertTriangle,
  FiTerminal,
} from "react-icons/fi";
import "./RequestJourney.css";

const nodes = [
  { icon: FiMonitor, title: "React UI", sub: "User action in a component" },
  { icon: FiSend, title: "Axios", sub: "HTTP request to the API" },
  { icon: FiShield, title: "Laravel Sanctum", sub: "Token authentication" },
  { icon: FiLock, title: "Access Control", sub: "Role-based permissions" },
  { icon: FiDatabase, title: "MySQL", sub: "Structured data layer" },
];

const scenarios = {
  valid: {
    label: "Valid token",
    icon: FiCheckCircle,
    stopAt: null,
    status: "200 OK",
    tone: "ok",
    message:
      "Request completed. The token was valid and the role was allowed.",
  },
  noToken: {
    label: "No token",
    icon: FiXCircle,
    stopAt: 2,
    status: "401 Unauthorized",
    tone: "error",
    message:
      "Stopped at Sanctum. Protected endpoints reject requests without a valid token.",
  },
  wrongRole: {
    label: "Wrong role",
    icon: FiAlertTriangle,
    stopAt: 3,
    status: "403 Forbidden",
    tone: "warn",
    message:
      "Stopped by access control. The user is authenticated but not allowed to do this.",
  },
};

function stepLog(step, key) {
  switch (step) {
    case 0:
      return { type: "info", text: "[React]   onClick → submitOrder()" };
    case 1:
      return key === "noToken"
        ? {
            type: "info",
            text: "[Axios]   POST https://technologycafee-f15psah9.b4a.run/api/orders  (no Authorization header)",
          }
        : {
            type: "info",
            text: "[Axios]   POST https://technologycafee-f15psah9.b4a.run/api/orders  Authorization: Bearer ••••••",
          };
    case 2:
      return key === "noToken"
        ? { type: "error", text: "[Sanctum] token missing ✗  request rejected" }
        : { type: "ok", text: "[Sanctum] token verified ✓" };
    case 3:
      return key === "wrongRole"
        ? {
            type: "warn",
            text: "[Access]  role not permitted ✗  request rejected",
          }
        : { type: "ok", text: "[Access]  role allowed ✓" };
    default:
      return { type: "ok", text: "[MySQL]   record saved ✓" };
  }
}

const STEP_MS = 1000;
const ARRIVE_MS = 800;

function RequestJourney() {
  const [scenario, setScenario] = useState("valid");
  const [running, setRunning] = useState(false);
  const [progressStep, setProgressStep] = useState(-1);
  const [activeStep, setActiveStep] = useState(-1);
  const [failedStep, setFailedStep] = useState(-1);
  const [logs, setLogs] = useState([]);
  const [result, setResult] = useState(null);

  const timers = useRef([]);
  const sectionRef = useRef(null);
  const autoRan = useRef(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const later = (fn, ms) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const run = (key) => {
    clearTimers();
    setProgressStep(-1);
    setActiveStep(-1);
    setFailedStep(-1);
    setLogs([]);
    setResult(null);
    setRunning(true);

    const sc = scenarios[key];
    const last = sc.stopAt ?? nodes.length - 1;

    for (let i = 0; i <= last; i++) {
      const t = i * STEP_MS;

      later(() => setProgressStep(i), t);

      later(() => {
        setActiveStep(i);
        setLogs((prev) => [...prev, stepLog(i, key)]);
        if (sc.stopAt === i) setFailedStep(i);
      }, t + (i === 0 ? 0 : ARRIVE_MS));
    }

    later(() => {
      setLogs((prev) => [...prev, { type: sc.tone, text: `← ${sc.status}` }]);
      setResult(sc);
      setRunning(false);
    }, last * STEP_MS + ARRIVE_MS + 700);
  };

  const choose = (key) => {
    if (running) return;
    setScenario(key);
    run(key);
  };

  // يشتغل تلقائياً مرة واحدة عند وصول الزائر للقسم
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoRan.current) {
          autoRan.current = true;
          run("valid");
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => clearTimers, []);

  const progress = progressStep < 0 ? 0 : progressStep / (nodes.length - 1);
  const started = progressStep >= 0;
  const failedAny = failedStep >= 0;

  const nodeState = (i) => {
    if (failedStep === i) return "failed";
    if (i === activeStep && running) return "active";
    if (i <= activeStep) return "passed";
    return "idle";
  };

  return (
    <section className="rj-section" id="journey" ref={sectionRef}>
      <div className="rj-container">
        <div className="rj-heading">
          <div className="rj-eyebrow">
            <span className="rj-eyebrow-line" />
            LIVE ARCHITECTURE
          </div>

          <h2>
            Follow a Request <span>Through the Stack.</span>
          </h2>

          <p>
            A simulation of how a request travels from the React interface to
            the MySQL database. Change the scenario and watch where security
            stops it.
          </p>
        </div>

        <div className="rj-dashboard">
          <div className="rj-top">
            <div className="rj-label">
              <span className="rj-dot" />
              <span>REQUEST JOURNEY</span>
            </div>

            <div className="rj-count">
              <FiTerminal />
              <span>Interactive simulation</span>
            </div>
          </div>

          <div className="rj-scenarios">
            {Object.entries(scenarios).map(([key, sc]) => {
              const Icon = sc.icon;
              return (
                <button
                  key={key}
                  type="button"
                  className={`rj-scenario ${scenario === key ? "active" : ""}`}
                  disabled={running}
                  onClick={() => choose(key)}
                >
                  <Icon />
                  <span>{sc.label}</span>
                </button>
              );
            })}
          </div>

          <div className="rj-stage">
            <div className="rj-pipeline">
              <div className="rj-line">
                <div
                  className={`rj-fill ${started ? "on" : ""} ${
                    failedAny ? "failed" : ""
                  }`}
                  style={{ width: `${progress * 100}%` }}
                />
                <div
                  className={`rj-packet ${started ? "on" : ""} ${
                    failedAny ? "failed" : ""
                  }`}
                  style={{ left: `${progress * 100}%` }}
                />
              </div>

              {nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={node.title} className={`rj-node ${nodeState(i)}`}>
                    <span className="rj-icon">
                      <Icon />
                    </span>
                    <div className="rj-node-text">
                      <h4 className="notranslate" translate="no">
                        {node.title}
                      </h4>
                      <p>{node.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rj-console notranslate" translate="no" dir="ltr">
            <div className="rj-console-bar">
              <i />
              <i />
              <i />
              <span>request.log</span>
            </div>

            <div className="rj-console-body">
              {logs.length === 0 && (
                <p className="rj-log-idle">Waiting for a request…</p>
              )}
              {logs.map((l, i) => (
                <p key={i} className={`rj-log ${l.type}`}>
                  {l.text}
                </p>
              ))}
            </div>
          </div>

          <div className="rj-result" role="status">
            <div className="rj-result-text">
              {result ? (
                <>
                  <span
                    className={`rj-badge ${result.tone} notranslate`}
                    translate="no"
                  >
                    {result.status}
                  </span>
                  <p>{result.message}</p>
                </>
              ) : (
                <p>Pick a scenario to see how the request behaves.</p>
              )}
            </div>

            <button
              type="button"
              className="rj-run"
              onClick={() => run(scenario)}
              disabled={running}
            >
              {result ? <FiRotateCcw /> : <FiPlay />}
              <span>{result ? "Run again" : "Send request"}</span>
            </button>
          </div>

          <div className="rj-footer">
            <span>
              BASED ON THE{" "}
              <span className="notranslate" translate="no">
                TECHNOLOGY CAFÉ
              </span>{" "}
              ARCHITECTURE
            </span>
            <span className="rj-footer-code notranslate" translate="no">
              {"<request />"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RequestJourney;