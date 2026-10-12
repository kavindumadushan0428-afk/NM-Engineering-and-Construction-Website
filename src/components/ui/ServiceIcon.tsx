import {
    LuDraftingCompass,
    LuBox,
    LuHardHat,
    LuTrees,
    LuPaintRoller,
    LuMessagesSquare,
} from "react-icons/lu";

export type ServiceSlug =
    | "design-build"
    | "house-plans"
    | "3d-visualization"
    | "renovation"
    | "boq-estimation"
    | "landscaping"
    | string;

interface ServiceIconProps {
    slug: ServiceSlug;
    className?: string;
    size?: number;
    strokeWidth?: number;
}

export default function ServiceIcon({
    slug,
    className = "",
    size = 24,
    strokeWidth = 1.75,
}: ServiceIconProps) {
    const iconProps = {
        size,
        strokeWidth,
        className,
        "aria-hidden": true,
    };

    switch (slug) {
        case "house-plans":
            return <LuDraftingCompass {...iconProps} />;
        case "3d-visualization":
            return <LuBox {...iconProps} />;
        case "design-build":
            return <LuHardHat {...iconProps} />;
        case "landscaping":
            return <LuTrees {...iconProps} />;
        case "renovation":
            return <LuPaintRoller {...iconProps} />;
        case "boq-estimation":
            return <LuMessagesSquare {...iconProps} />;
        default:
            return <LuDraftingCompass {...iconProps} />;
    }
}
