//webpackがnode_modulesの中を見に行ってくれるので相対パス書く必要がない
import $ from "jquery";
import velocity from "velocity-animate";
import { add } from "./modules/math";

// console.log("app");

const result = add(1, 2);

$("body").append(result);
velocity($("h1"), "fadeIn", { duration: 2000, loop: true });
