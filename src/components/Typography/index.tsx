import './style/index.scss';
import OriginTypography from './Typography';
import Text from './Text';
type TypographyProps = typeof OriginTypography & {
  Text: typeof Text;
};
const Typography = OriginTypography as TypographyProps;
Typography.Text = Text;
export default Typography;
