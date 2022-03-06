export interface LinkProps {
  url: string;
  name: string;
}

export const Link = ({ url, name }: LinkProps): JSX.Element => {
  return (
    <a href={`https://github.com${url}`} target="_blank">
      {name}
    </a>
  );
};
