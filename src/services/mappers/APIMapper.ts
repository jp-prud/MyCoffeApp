import {MetaDataPageAPI} from '@api';

class APIMapper {
  toMetaDataPresentation(meta: MetaDataPageAPI) {
    return {
      total: meta.total,
      perPage: meta.per_page,
      currentPage: meta.current_page,
      lastPage: meta.last_page,
      firstPage: meta.first_page,
      firstPageURL: meta.first_page_url,
      lastPageURL: meta.last_page_url,
      hasNextPage: !!meta.next_page_url,
      hasPreviousPage: !!meta.previous_page_url,
    };
  }
}

export default new APIMapper();
