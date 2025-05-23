import type * as Preset from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	feSidebar: [{ type: "autogenerated", dirName: "fe" }],
	nodeJsSidebar: [{ type: "autogenerated", dirName: "node_js" }],
	rnSidebar: [{ type: "autogenerated", dirName: "react_native" }],
	iosSidebar: [{ type: "autogenerated", dirName: "ios" }],
	androidSidebar: [{ type: "autogenerated", dirName: "android" }],
	projectsSidebar: [{ type: "autogenerated", dirName: "projects" }],
	csSidebar: [{ type: "autogenerated", dirName: "cs" }],
	booksSidebar: [{ type: "autogenerated", dirName: "books" }],
	etcSidebar: [{ type: "autogenerated", dirName: "etc" }],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
} satisfies Preset.SidebarsConfig;

export default sidebars;
