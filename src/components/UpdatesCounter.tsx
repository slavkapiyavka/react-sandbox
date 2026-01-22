type Props = {
  value: number;
  isLoading: boolean;
};

const UpdatesCounter = ({ value, isLoading }: Props) => {
  return (
    <p>
      {isLoading
        ? "Загружаю картинки, погоди..."
        : `картинки обновлены ${value} раз(а)`}
    </p>
  );
};

export default UpdatesCounter;
