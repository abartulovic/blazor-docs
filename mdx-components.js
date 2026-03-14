import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import PreWithCopy from "./components/PreWithCopy";
import CodePreviewSplit from "./components/CodePreviewSplit";
import {
  Checklist,
  ConceptCard,
  ConceptGrid,
  InfoBox,
  LessonHero,
  LessonSummary,
  ScreenshotFigure,
  StepCard,
  StepGrid,
} from "./components/LessonUI";

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components) {
  return {
    ...docsComponents,
    pre: (props) => <PreWithCopy {...props} />,
    LessonHero,
    InfoBox,
    StepGrid,
    StepCard,
    ConceptGrid,
    ConceptCard,
    ScreenshotFigure,
    Checklist,
    LessonSummary,
    CodePreviewSplit,
    ...components,
  };
}
