import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LessonCard = ({ title, desc, unity }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={onOpen} className="border-2 rounded-lg shadow-sm">
        <div className="bg-gray-100 rounded-lg">
          <div>
            <img
              className="h-40 rounded w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
          </div>
          <div className="p-4">
            <h3 className="tracking-widest text-primary text-xs font-medium title-font">
              {unity}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              {title}
            </h2>
            {/* <p className="leading-snug inline text-base">{desc}</p> */}
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>اختر المدرس (القناة)</ModalHeader>
          <ModalBody>
            <div className="grid grid-cols-2 gap-2.5">
              <Button as={Link} to="eldar-1/video2" colorScheme="green">
                محمد عادل
              </Button>
              <Button as={Link} to="eldar-1/video2" colorScheme="green">
                محمد عادل
              </Button>
              <Button as={Link} to="eldar-1/video2" colorScheme="green">
                محمد عادل
              </Button>
              <Button as={Link} to="eldar-1/video2" colorScheme="green">
                محمد عادل
              </Button>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant="ghost">
              إلغاء
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LessonCard;
