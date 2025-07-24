import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("imprint", "./routes/imprint.tsx"),
    route("privacy", "./routes/privacy.tsx"),
  ]),
] satisfies RouteConfig;
