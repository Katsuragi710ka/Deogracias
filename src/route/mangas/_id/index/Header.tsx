import React, { FC } from 'react';
import { connect } from 'react-redux';

import ItemContainer from '@appComponent/HeaderItem/ItemContainer';

interface ComponentStateProps {
	manga: MangaEntity;
	currentPageIdx: number;
}
interface ComponentDispatchProps {}
interface ComponentOwnProps {}
type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;
const MangasId: FC<ComponentProps> = props => {
	const mangaName = props.manga ? props.manga.name : "";
	const downloadImagePath = props.manga.pages[props.currentPageIdx] ? props.manga.pages[props.currentPageIdx].url : "";
	return (
		<ItemContainer title={mangaName}>
			<a href={downloadImagePath} download>Download Image</a>
		</ItemContainer>
	);
};
const mapStateToProps = state => ({ manga: state.entity.manga.selectedManga, currentPageIdx: state.util.viewer.currentPageIdx });
export default connect<ComponentStateProps, ComponentDispatchProps>(mapStateToProps, {})(MangasId);