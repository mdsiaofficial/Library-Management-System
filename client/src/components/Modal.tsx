
export interface IModalProps {
  toggleModal(): void;
  content: JSX.Element;
}

export default function Modal (props: IModalProps):JSX.Element {
  return (
    <div>
      
      <div className="modal-bg z-[1] bg-black w-full h-full absolute top-0 left-0">
        <div className="modal z-[5] w-[30%] h-fit flex flex-col items-center justify-start rounded-lg shadow-xl bg-bg-pri sticky top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 pb-4 ">
          <h5 className="modal-exit self-start cursor-pointer " onClick={props.toggleModal}>X</h5>
          {props.content}
        </div>
      </div>
    </div>
  );
}
