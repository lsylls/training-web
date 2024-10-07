import React from "react";
import "./index.css";
/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();
    return (
    <div
        className="global-footer"
    >
      <div>© {currentYear} training-web</div>
      <div>
          <a href="https://github.com/lsylls/training-web" target="_blank">
              作者：lsy
          </a>
      </div>
    </div>
  );
}
