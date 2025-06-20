import "./LoadMoreButton.scss"

interface Props {
    fetchMore: () => void
}

export const LoadMoreButton: React.FC<Props> = ({ fetchMore }) => {
    return (
        <button className="load-more-btn" onClick={fetchMore}>Load more</button>
    )
}
