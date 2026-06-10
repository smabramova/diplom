import Frame2263 from "@/views/Frame2263";
import Frame2750 from "@/views/Frame2750";
import Frame2346 from "@/views/Frame2346";
import Frame2211 from "@/views/Frame2211";
import Frame2352 from "@/views/Frame2352";
import Frame2634 from "@/views/Frame2634";
import Frame2625 from "@/views/Frame2625";
import Frame2410 from "@/views/Frame2410";
import Frame2192 from "@/views/Frame2192";
import Frame2400 from "@/views/Frame2400";
import Frame2162 from "@/views/Frame2162";

export const routes = [{
          path: "/frame2263",
          component: Frame2263,
          guid: "2:263",
        },
{
          path: "/frame2750",
          component: Frame2750,
          guid: "2:750",
        },
{
          path: "/frame2346",
          component: Frame2346,
          guid: "2:346",
        },
{
          path: "/frame2211",
          component: Frame2211,
          guid: "2:211",
        },
{
          path: "/frame2352",
          component: Frame2352,
          guid: "2:352",
        },
{
          path: "/frame2634",
          component: Frame2634,
          guid: "2:634",
        },
{
          path: "/frame2625",
          component: Frame2625,
          guid: "2:625",
        },
{
          path: "/frame2410",
          component: Frame2410,
          guid: "2:410",
        },
{
          path: "/frame2192",
          component: Frame2192,
          guid: "2:192",
        },
{
          path: "/frame2400",
          component: Frame2400,
          guid: "2:400",
        },
{
          path: "/",
          component: Frame2162,
          guid: "2:162",
        }];


export const guidPathMap = new Map(
  routes.map((item) => [item.guid, item.path])
);
export const pathGuidMap = new Map(
  routes.map((item) => [item.path, item.guid])
);

export const getPathByGuid = (guid: string) => {
  return guidPathMap.get(guid) || "";
};

export const getGuidByPath = (path: string) => {
  return pathGuidMap.get(path) || "";
};
