import { Observable, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface SubmitOptions<T = any> {
  successMessage?: string;
  errorMessage?: string;
  onSuccess?: (response: T) => void;
  onError?: (error: any) => void;
}

export function handleLoadingSubmit<T>(
  loadingState: { isLoading: boolean },
  snackBar: MatSnackBar,
  request$: Observable<T>,
  options: SubmitOptions<T> = {}
) {
  const {
    successMessage = 'Operación exitosa',
    errorMessage = 'Error en la operación',
    onSuccess,
    onError,
  } = options;

  loadingState.isLoading = true;

  return request$.pipe(
    tap({
      next: (response) => {
        snackBar.open(successMessage, 'Cerrar', { duration: 3000 });
        onSuccess?.(response);
      },
      error: (error) => {
        snackBar.open(errorMessage, 'Cerrar', { duration: 3000 });
        console.error(error);
        onError?.(error);
      },
      finalize: () => (loadingState.isLoading = false),
    })
  );
} 