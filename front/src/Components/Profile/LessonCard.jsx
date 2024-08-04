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

const LessonCard = ({ lesson }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={onOpen} className="border-2 cursor-pointer rounded-lg shadow-sm">
        <div className="bg-gray-100 rounded-lg h-full">
          <div>
            <img
              className="h-40 rounded w-full object-cover object-center"
              src={`${import.meta.env.VITE_SERVER_URL}${
                lesson?.attributes?.image?.data?.attributes?.url
              }`}
              alt="thumbnail"
            />
          </div>
          <div className="p-4">
            <h3 className="tracking-widest text-primary text-xs font-medium title-font">
              {lesson?.attributes?.unity?.data?.attributes?.name}
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              {lesson?.attributes?.title}
            </h2>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>اختر المدرس (القناة)</ModalHeader>
          <ModalBody>
            <div className="grid grid-cols-2 gap-2.5">
              {lesson?.attributes?.videos?.data?.map((video, key) => {
                return (
                  <Button key={key} as={Link} to={`${lesson?.attributes?.slug}/${video?.id}`} colorScheme="green">
                  {video?.attributes?.teacherName}
                </Button>
                )
              })}
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
