export const Title = ({ title, Item }) => {
  const Tag = Item || 'h2';
  return <Tag>{title}</Tag>;
};
