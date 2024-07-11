import { MdOutlinePostAdd } from "react-icons/md";

export const icons = {
  post: MdOutlinePostAdd
}

interface Props {
  name: keyof typeof icons,
}

export const Icon = ({ name, ...props }: Props) => {
  const Components = icons[name]
  return (
    <Components fill="#7cc353" {...props} />
  )
};
