export type MiniMenuItems = {
    hashId: string;
    title: string;
};
type MiniMenuProps = {
    model: MiniMenuItems[];
    onScrollMonitor?: () => void;
};
declare function MiniMenu({ model, onScrollMonitor }: MiniMenuProps): import("react/jsx-runtime").JSX.Element;
export default MiniMenu;
