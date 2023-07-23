interface Props {
    /**
     * Provide a company name, or else it will be defaulted with "Walcron"
     */
    companyName?: string;
    /**
     * Provide company year started as YYYY
     */
    establishedYear?: number;
    /**
     * Last updated year
     */
    lastUpdatedYear: number;
}
/**
 * Walcron footer
 */
declare const Wrapper: ({ companyName, establishedYear, lastUpdatedYear, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Wrapper;
