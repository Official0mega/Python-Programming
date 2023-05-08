#include <unistd.h>
#include <stdio.h>

int main(void)
{
	int size[] = {16, 12, 8, 10, 33};

	int *redef = size;
	redef++;

	printf("\t%p\n", redef);

	return 0;
}
