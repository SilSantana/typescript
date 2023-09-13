import { Printable } from "../uteis/printable.js";
import { Comparable } from "./Comparable.js";

export interface Objeto<T> extends Printable, Comparable<T> {

}