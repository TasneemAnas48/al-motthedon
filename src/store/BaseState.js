export class BaseState {
  loading;
  loadingFetch;
  loadingFetchItem;
  error;
  errorFetch;
  ifEdit;
  search;
  editedIndex;
  delete;
  dialogDeleteModel;

  constructor() {
    this.loading = false;
    this.loadingFetch = false;
    this.loadingFetchItem = false;
    this.error = false;
    this.errorFetch = false;
    this.ifEdit = false;
    this.search = '';
    this.editedIndex = -1;
    this.delete = '';
    this.dialogDeleteModel = false;
  }
}
