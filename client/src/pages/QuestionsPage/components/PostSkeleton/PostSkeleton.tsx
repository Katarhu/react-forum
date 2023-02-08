import Skeleton from '../../../../common/components/Skeleton/Skeleton';

const PostSkeleton = () => {
    return (
        <Skeleton maxWidth={35} minWidth={24}>
            <Skeleton.Box flex alignCenter gap={0.5}>
                <Skeleton.Circle maxWidth={2.25}/>
                <Skeleton.Box flex column gap={0.15}>
                    <Skeleton.Text maxWidth={7}/>
                    <Skeleton.Text maxWidth={5} size={0.75} />
                </Skeleton.Box>
            </Skeleton.Box>

            <Skeleton.Box flex column gap={0.5}>
                <Skeleton.Text width={100} size={1.5}/>
                <Skeleton.Text width={100}/>
                <Skeleton.Text width={65}/>
            </Skeleton.Box>

            <Skeleton.Box flex gap={0.5}>
                <Skeleton.Text maxWidth={2.5} size={1.25}/>
                <Skeleton.Text maxWidth={2.5} size={1.25}/>
                <Skeleton.Text maxWidth={2.5} size={1.25}/>
            </Skeleton.Box>
        </Skeleton>
    )
}

export default PostSkeleton;
