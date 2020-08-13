const fs = require('fs');
const createRelatedResourceNode = require('./src/createRelatedResourceNode');
const getRelatedResources = require('./src/getRelatedResources');

const writeableData = {};

exports.onPreBootstrap = (_, pluginOptions) => {
  const { file } = pluginOptions;

  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '{}');
  }
};

exports.onCreateNode = async (
  { actions, node, getNodesByType, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode } = actions;
  const { filterNode = () => false, getPath } = pluginOptions;

  if (node.internal.type !== 'Mdx' || !filterNode({ node })) {
    return;
  }

  const [
    {
      siteMetadata: { siteUrl },
    },
  ] = getNodesByType('Site');

  const pathname = getPath({ node });
  const resources = await getRelatedResources({ node, siteUrl }, pluginOptions);

  writeableData[pathname] = resources;

  resources.forEach((resource) => {
    createRelatedResourceNode({
      parent: node.id,
      resource,
      createContentDigest,
      createNode,
      createNodeId,
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
  type RelatedResource implements Node {
    id: ID!
    title: String!
    url: String!
  }
  `;

  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }, pluginOptions) => {
  const { file } = pluginOptions;

  createResolvers({
    Mdx: {
      relatedResources: {
        type: ['RelatedResource!'],
        resolve(source, args, context, info) {
          return [];
        },
      },
    },
  });
};

exports.onPostBootstrap = (_, pluginOptions) => {
  const { enabled, file } = pluginOptions;

  if (enabled) {
    fs.writeFileSync(file, JSON.stringify(writeableData, null, 2));
  }
};
