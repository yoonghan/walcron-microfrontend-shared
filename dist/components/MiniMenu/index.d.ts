export type MiniMenuItems = {
    hashId: string;
    title: string;
};
type MiniMenuProps = {
    model: MiniMenuItems[];
    onScrollMonitor?: () => void;
    onResizeMonitor?: () => void;
};
declare function MiniMenu({ model, onScrollMonitor, onResizeMonitor }: MiniMenuProps): import("react/jsx-runtime").JSX.Element;
export default MiniMenu;
