type Props = {
    title: string;
};
export const Button = ({title}: Props) => {
    return (
        <div>
            <button>{title}</button>
        </div>
    );
};