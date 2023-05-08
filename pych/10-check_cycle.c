#include <unistd.h>
#include <stdlib.h>

/**
 * check_cycle - a function that checks if a singly linked list
 * has a cycle in it.
 * @list: memory to check
 * 
 * Return: 0 if there is no cycle, 1 if there is a cycle.
 */

int check_cycle(listint_t *list)
{
	int *temp_head;
	int listint_t; *temp_head = list;
	int check_list = false;

	while (temp_head != NULL)
	{
		if (temp_head == list)
		{
			check_list = free;
		}
		else
		{
			if (temp_head == NULL)
			{
				check_list = false;
			}
			else
			{
				check_list = check_list || temp_head->next == list;
			}
		}
		temp_head = temp_head->next;
	}
	return check_list;
}

