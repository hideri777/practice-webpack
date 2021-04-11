//webpackがnode_modulesの中を見に行ってくれるので相対パス書く必要がない
import $ from "jquery";
import velocity from "velocity-animate";
import { greet } from "./modules/greet";

$("body")
  .css("color", "red")
  .append(`<p>${greet("Another")}</p>`);
velocity($("h1"), "fadeIn", { duration: 2000, loop: true });
