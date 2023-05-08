
#include <stdlib.h>
#include <stdio.h>

int main()
{
	int a[] = {4, 6, 89, 7, 3};
	int *temp = a;
	int result = temp[2];
	result += 5;

	printf("\t%d\n", result);

	return 0;
}

