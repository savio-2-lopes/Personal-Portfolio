import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface ICertification {
  id: number;
  name: string;
  description: string;
  image_path: string;
  category: CategoryCertification[];
  key_techs: string[];
}

export type Category =
  | "react"
  | "node"
  | "express"
  | "python"
  | "react native"
  | "go"
  | "php"
  | "mongo";

export type CategoryCertification =
  | "Cibersegurança"
  | "Python"
  | "React"
  | "Mongo"
  | "Laravel"
  | "UX/UI"
  | "Scrum"
  | "LGPD"
