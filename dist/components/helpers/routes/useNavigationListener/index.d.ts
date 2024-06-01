declare const useNavigationListener: ({ appName, containerName, props, }: {
    appName: string;
    containerName: string;
    props: {
        pathname: string;
        navigate: (location: string) => void;
    };
}) => void;
export default useNavigationListener;
