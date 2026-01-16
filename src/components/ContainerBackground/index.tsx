interface ContainerBackgroundProps {
  children: React.ReactNode;
  color?: string;
  image?: string;
}

export function ContainerBackground({
  children,
  color,
  image,
}: ContainerBackgroundProps) {
  const urlImage = `url(${image})`;
  return (
    <>
      <div
        className="containerBackground"
        style={{ background: `${urlImage ? urlImage : color}` }}
      >
        {children} {color} {image}
      </div>
    </>
  );
}
