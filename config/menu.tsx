import { MenuDataItem } from "@ant-design/pro-components";
import { CrownOutlined } from "@ant-design/icons";
// 菜单列表
export const menus = [
  {
    path: "/",
    name: "主页",
  },
  {
    path: "/questions",
    name: "题目",
  },
  {
    path: "/banks",
    name: "题库",
  },
  {
    name: "training",
    path: "https://www.training.com",
    target: "_blank",
  },
  {
    path: "/admin",
    name: "管理",
    icon: <CrownOutlined />,
    children: [
      {
        path: "/admin/user",
        name: "用户管理",
      },
    ],
  },
] as MenuDataItem[];
