import { Modal } from '@mantine/core'

interface Props {
  open: boolean,
  setOpen: () => void
}

const Train = ({ open, setOpen }: Props) => {
  return (
    <Modal opened={open} onClose={setOpen}>

    </Modal>
  )
}

export default Train
